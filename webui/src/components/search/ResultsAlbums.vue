<template>
	<section>
		<BaseLoadingPlaceholder v-if="isLoading" />

		<template v-else>
			<ResultsError v-if="viewInfo.error" :error="viewInfo.error"></ResultsError>
			<div v-else-if="viewInfo.data.length === 0">
				<h1 class="text-center">{{ $t('search.noResultsAlbum') }}</h1>
			</div>

			<div v-else class="release-grid">
				<div v-for="release in viewInfo.data.slice(0, itemsToShow)" :key="release.albumID" class="w-40 release">
					<router-link custom v-slot="{ navigate }" class="cursor-pointer" :to="{ name: 'Album', params: { id: release.albumID } }">
						<div @click="navigate" @keypress.enter="navigate" role="link">
							<CoverContainer
								is-rounded
								:cover="release.albumCoverMedium"
								:link="release.albumLink"
								@click.stop="$emit('add-to-queue', $event)"
							/>

							<span class="primary-text">
								<i
									v-if="release.isAlbumExplicit"
									class="material-icons title-icon"
									style="font-size: 1.0625rem !important"
								>
									explicit
								</i>
								{{ release.albumTitle }}
							</span>
						</div>
					</router-link>

					<p class="secondary-text">
						{{
							$t('globals.by', { artist: release.artistName }) +
							' - ' +
							$tc('globals.listTabs.trackN', release.albumTracks)
						}}
					</p>
				</div>
			</div>
		</template>
	</section>
</template>

<script>
import BaseLoadingPlaceholder from '@/components/globals/BaseLoadingPlaceholder.vue'
import CoverContainer from '@/components/globals/CoverContainer.vue'
import ResultsError from '@/components/search/ResultsError.vue'

export default {
	components: {
		BaseLoadingPlaceholder,
		CoverContainer,
		ResultsError
	},
	props: {
		viewInfo: {
			validator(value) {
				const isNull = Object.is(value, null)
				const isObject = Object.prototype.toString.call(value) === '[object Object]'

				return isNull || isObject
			},
			required: true
		},
		itemsToShow: {
			type: Number,
			default: 6
		},
		wantHeaders: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	computed: {
		isLoading() {
			return !this.viewInfo || !this.viewInfo.hasLoaded
		}
	}
}
</script>
