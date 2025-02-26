<template>
	<main
		id="content"
		ref="content"
		aria-label="main content"
		@scroll="$route.name === 'Search' ? handleContentScroll($event) : null"
	>
		<div id="container">
			<BackButton v-if="showBackButton" class="sticky -ml-20" style="top: 1rem" />

			<keep-alive>
				<router-view
					v-if="!$route.meta.notKeepAlive"
					:key="$route.fullPath"
					:class="{ '-mt-16': showBackButton }"
					:perform-scrolled-search="performScrolledSearch"
				></router-view>
			</keep-alive>

			<router-view
				v-if="$route.meta.notKeepAlive"
				:key="$route.fullPath"
				:class="{ '-mt-16': showBackButton }"
				:perform-scrolled-search="performScrolledSearch"
			></router-view>
		</div>
	</main>
</template>

<script>
import { debounce } from '@/utils/utils'
import BackButton from '@/components/globals/BackButton.vue'

export default {
	components: {
		BackButton
	},
	data: () => ({
		performScrolledSearch: false
	}),
	computed: {
		showBackButton() {
			return ['Tracklist', 'Artist', 'Album', 'Playlist', 'Spotify Playlist'].includes(this.$route.name)
		}
	},
	mounted() {
		this.$router.beforeEach((_, __, next) => {
			this.$refs.content.scrollTo(0, 0)
			next()
		})
	},
	methods: {
		handleContentScroll: debounce(async function () {
			if (this.$refs.content.scrollTop + this.$refs.content.clientHeight < this.$refs.content.scrollHeight) return
			this.performScrolledSearch = true

			await this.$nextTick()

			this.performScrolledSearch = false
		}, 100)
	}
}
</script>

<style>
#container {
	--container-width: 95%;
	margin: 0 auto;
	max-width: 1280px;
	width: var(--container-width);
	transform: scale(1);
}
@media only screen and (min-width: 601px) {
	#container {
		--container-width: 85%;
	}
}
@media only screen and (min-width: 993px) {
	#container {
		--container-width: 70%;
	}
}

main {
	background-color: var(--main-background);
	padding-right: 5px;
	width: 100%;
	height: calc(100vh - 93px);
	overflow-y: scroll;
	overflow-x: hidden;
}

main::-webkit-scrollbar {
	width: 10px;
}

main::-webkit-scrollbar-track {
	background: var(--main-background);
}

main::-webkit-scrollbar-thumb {
	background: var(--main-scroll);
	border-radius: 4px;
	width: 6px;
	padding: 0px 2px;
}
</style>
