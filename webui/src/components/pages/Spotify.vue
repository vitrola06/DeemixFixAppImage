<template>
	<div id="spotify_tab" class="image-header">
		<h1 class="mb-8 text-5xl capitalize"> {{ $t('sidebar.spotify') }} </h1>
		<h2 class="mb-6 text-3xl">
			{{ $t('spotifyHome.usersHeading') }}
			<div ref="reloadButton" aria-label="reload" class="inline-block clickable" role="button" @click="refreshSpotifyPlaylists">
				<i :class="{ hidden: isRefreshingSpotifyPlaylists }" class="material-icons">sync</i>
			</div>
		</h2>
		<div class="followed-grid">
			<div v-for="user in followedUsers" class="followed-user">
				<span>{{ user }}</span>
				<a :href="'http://open.spotify.com/user/' + user" target="_blank">
					<i class="material-icons">launch</i>
				</a>
				<button @click="() => unfollowUser(user)" class="btn btn-primary">
					<i class="material-icons fill-current">close</i>
				</button>
			</div>
		</div>

		<div class="flex gap-2 items-center mb-4">
			<input v-model="toBeFollowed" type="text" :placeholder="i18n.t('spotifyHome.tbfPlaceholder')" />
			<button class="btn btn-primary" @click="followUser">{{ $t('spotifyHome.follow') }}</button>
		</div>

		<div class="relative">
			<BaseLoadingPlaceholder v-if="isRefreshingSpotifyPlaylists" :text="$t('globals.loading')" additional-classes="absolute top-10 left-0 w-full" />
			<div v-else>
				<h2 class="mb-6 text-3xl">{{ $t('spotifyHome.subHeading') }}</h2>
				<BaseAccordion class="warning">
					<template #title>
						<h3 class="warning-header"> <i class="material-icons">info</i>{{ $t('spotifyHome.warningTitle') }} </h3>
					</template>
					<p>{{ $t('spotifyHome.warningBody.p1') }}</p>
					<p>{{ $t('spotifyHome.warningBody.p2') }}</p>
					<p>{{ $t('spotifyHome.warningBody.p3') }}</p>
				</BaseAccordion>

				<div v-if="spotifyPlaylists.length" class="release-grid">
					<div v-for="release in spotifyPlaylists" :key="release.id" class="release">
						<router-link :to="{ name: 'Spotify Playlist', params: { id: release.id } }" class="cursor-pointer" custom v-slot="{ navigate }">
							<div @click="navigate" @keypress.enter="navigate" role="link">
								<CoverContainer :cover="release.picture_medium" :link="release.link" is-rounded @click.stop="addToQueue" />
								<p class="primary-text">{{ release.title }}</p>
							</div>
						</router-link>

						<p class="secondary-text">
							{{
								`${$t('globals.by', { artist: release.creator.name })} - ${$tc(
									'globals.listTabs.trackN',
									release.nb_tracks
								)}`
							}}
						</p>
					</div>
				</div>
				<div v-else>
					<h1>{{ $t('favorites.noPlaylists') }}</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { BaseTab, BaseTabs } from '@/components/globals/BaseTabs';
import BaseLoadingPlaceholder from '@/components/globals/BaseLoadingPlaceholder.vue';
import BaseAccordion from '../globals/BaseAccordion.vue';
import CoverContainer from '@/components/globals/CoverContainer.vue';
import PreviewControls from '@/components/globals/PreviewControls.vue';

import { useSpotifyPlaylists } from '@/use/spotifyplaylists';
import { computed, ref, watch } from 'vue';
import { toast } from '@/utils/toasts';
import { socket } from '@/utils/socket';
import store from '@/store';
import { useI18n } from 'vue-i18n-bridge';

export default {
	components: {
		BaseLoadingPlaceholder,
		BaseTab,
		BaseTabs,
		BaseAccordion,
		CoverContainer,
		PreviewControls,
	},
	setup() {
		const lastUser = ref('');
		const spotifyUser = ref('');
		const toBeFollowed = ref('');
		const followedUsers = computed(() => spotifyUser.value
			.split(",")
			.map(user => user.trim())
			.filter(Boolean)
		)

		const i18n = useI18n();
		const {
			favoriteSpotifyPlaylists,
			isRefreshingSpotifyPlaylists,
			refreshSpotifyPlaylists,
		} = useSpotifyPlaylists();

		const storedSpotifyUser = localStorage.getItem('spotifyUser');
		if (storedSpotifyUser) {
			lastUser.value = storedSpotifyUser;
			spotifyUser.value = storedSpotifyUser;
			socket.emit('update_userSpotifyPlaylists', spotifyUser.value);
		}
		console.log(spotifyUser.value, lastUser.value);

		// Watch the playlist refresh status and trigger a toast on completion
		watch(isRefreshingSpotifyPlaylists, (newVal, oldVal) => {
			const isRefreshingTerminated = oldVal && !newVal;
			if (!isRefreshingTerminated) return;
			toast(i18n.t('toasts.refreshFavs'), 'done', true);
		});

		refreshSpotifyPlaylists().catch(console.error);

		const updateFollowedUsers = () => {
			if (!spotifyUser.value) return;
			if (lastUser.value !== spotifyUser.value) {
				lastUser.value = spotifyUser.value
				localStorage.setItem('spotifyUser', spotifyUser.value); // TODO maybe? move to store (idk)
				store.dispatch('setSpotifyUserId', spotifyUser.value);
				refreshSpotifyPlaylists().catch(console.error);
				console.log('updated spotify user to', spotifyUser.value)
			}
		};

		const followUser = () => {
			if (spotifyUser.value.includes(toBeFollowed.value)) return;
			spotifyUser.value += `,${toBeFollowed.value}`
			toBeFollowed.value = ''
			updateFollowedUsers()
		}

		const unfollowUser = (user) => {
			followedUsers.value.splice(followedUsers.value.indexOf(user), 1)
			spotifyUser.value = followedUsers.value.join(",")
			updateFollowedUsers()
		}

		console.log("ref values", spotifyUser.value, lastUser.value)
		return {
			i18n,
			spotifyPlaylists: favoriteSpotifyPlaylists,
			isRefreshingSpotifyPlaylists,
			refreshSpotifyPlaylists,
			spotifyUser,
			lastUser,
			updateFollowedUsers,
			followedUsers,
			toBeFollowed,
			followUser,
			unfollowUser
		};
	},
};
</script>

<style scoped>
	.followed-user {
		display: flex;
		gap: 1rem;
		align-items: center;

		padding-block: 0.25rem;
		padding-inline: 0.75rem;
		font-size: 0.8em;

		/* border-top: 1px solid white; */
	}
	.followed-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
		grid-auto-flow: column;
	}

	.warning {
		border-top-width: 1px;
		border-bottom-width: 1px;
		border-color: #3a393d;
		border-radius: 0px;

		padding-top: 0px;
		padding-bottom: 0px;
		
		margin-left: 0px;
		margin-right: 0px;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}
	.warning-header {
		display: inline-flex;
		align-items: center;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-size: 1.25rem;
	}
</style>
