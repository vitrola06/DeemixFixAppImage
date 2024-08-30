<template>
	<div id="spotify_tab" class="image-header">
		<h1 class="mb-8 text-5xl capitalize">{{ $t('sidebar.spotify') }}</h1>

		spotifyyyy

		monkey
	</div>
</template>

<script>
/* eslint-disable camelcase */
import { mapGetters } from 'vuex'
import { convertDuration } from '@/utils/utils'
import { COUNTRIES } from '@/utils/countries'
import { sendAddToQueue } from '@/utils/downloads'
import EventBus from '@/utils/EventBus'

export default {
	data() {
		return {
			link: '',
			title: '',
			subtitle: '',
			image: '',
			data: {},
			type: '',
			id: '0',
			countries: [],
			available_countries: []
		}
	},
	computed: {
		...mapGetters({
			user: 'getUser'
		})
	},
	mounted() {
		EventBus.$on('analyze_track', this.showTrack)
		EventBus.$on('analyze_album', this.showAlbum)
		EventBus.$on('analyze_notSupported', this.notSupported)
	},
	methods: {
		convertDuration,
		reset() {
			this.title = 'Loading...'
			this.subtitle = ''
			this.image = ''
			this.data = {}
			this.type = ''
			this.link = ''
			this.countries = []
			this.available_countries = []
		},
		showTrack(data) {
			this.reset()
			const {
				title,
				title_version,
				album: { cover_xl },
				link,
				available_countries,
				id
			} = data

			this.title = title + (title_version && !title.includes(title_version) ? ' ' + title_version : '')
			this.image = cover_xl
			this.type = 'track'
			this.link = link
			this.id = id

			available_countries.forEach(cc => {
				const temp = []
				const chars = [...cc].map(c => c.charCodeAt() + 127397)
				temp.push(String.fromCodePoint(...chars))
				temp.push(COUNTRIES[cc])
				temp.push(cc.toUpperCase())
				this.countries.push(temp)
				this.available_countries.push(cc.toLowerCase())
			})

			this.data = data
		},
		showAlbum(data) {
			this.reset()
			const { title, cover_xl, link, id } = data

			this.title = title
			this.image = cover_xl
			this.type = 'album'
			this.link = link
			this.data = data
			this.id = id
		},
		notSupported() {
			this.link = 'error'
		},
		addToQueue(e) {
			sendAddToQueue(e.currentTarget.dataset.link)
		}
	}
}
</script>

<style></style>
