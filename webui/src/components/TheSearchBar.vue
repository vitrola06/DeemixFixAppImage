<template>
	<div id="search-wrapper">
		<header id="search" aria-label="searchbar" :class="{ showSearchButton }">
			<div v-if="!showSearchButton" class="search__icon">
				<i class="material-icons">search</i>
			</div>

			<input id="searchbar" ref="searchbar" class="w-full" autocomplete="off" type="search" name="searchbar" value=""
				:placeholder="$t('searchbar')" autofocus @keyup="keyPerformSearch($event)" />
			<!-- @keyup.enter.exact="onEnter"
				@keyup.ctrl.enter="onCTRLEnter" -->
			<a v-if="showSearchButton" href="#" class="searchButton" @contextmenu="rightClickPerformSearch"
				@click="clickPerformSearch"><i class="material-icons">search</i></a>
		</header>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { defineComponent, ref } from '@vue/composition-api'
import { isValidURL } from '@/utils/utils'
import { sendAddToQueue } from '@/utils/downloads'
import { fetchData } from '@/utils/api'
import EventBus from '@/utils/EventBus'

export default defineComponent({
	setup() {
		return {
			lastTextSearch: ref('')
		}
	},
	computed: {
		...mapGetters({
			showSearchButton: 'getShowSearchButton'
		})
	},
	created() {
		const focusSearchBar = keyEvent => {
			if (keyEvent.keyCode === 70 && keyEvent.ctrlKey) {
				keyEvent.preventDefault()
				this.$refs.searchbar.focus()
			}
		}

		const deleteSearchBarContent = keyEvent => {
			if (!(keyEvent.key === 'Backspace' && keyEvent.ctrlKey && keyEvent.shiftKey)) return

			this.$refs.searchbar.value = ''
			this.$refs.searchbar.focus()
		}

		document.addEventListener('keydown', focusSearchBar)
		document.addEventListener('keyup', deleteSearchBarContent)

		this.$on('hook:destroyed', () => {
			document.removeEventListener('keydown', focusSearchBar)
			document.removeEventListener('keyup', deleteSearchBarContent)
		})
	},
	methods: {
		async clickPerformSearch(ev) {
			ev.preventDefault()
			const term = this.$refs.searchbar.value
			const isEmptySearch = term === ''
			if (isEmptySearch) return

			await this.performSearch(term, false)
		},
		async rightClickPerformSearch(ev) {
			ev.preventDefault()
			ev.stopPropagation()
			const term = this.$refs.searchbar.value
			const isEmptySearch = term === ''
			if (isEmptySearch) return

			await this.performSearch(term, true)
		},
		async keyPerformSearch(keyEvent) {
			const isEnterPressed = keyEvent.keyCode === 13
			if (!isEnterPressed) return

			const term = this.$refs.searchbar.value
			const isEmptySearch = term === ''
			if (isEmptySearch) return

			const isCtrlPressed = keyEvent.ctrlKey
			await this.performSearch(term, isCtrlPressed)
		},
		async performSearch(term, modifierKey) {
			const isSearchingURL = isValidURL(term)
			const isShowingAnalyzer = this.$route.name === 'Link Analyzer'
			const isShowingSearch = this.$route.name === 'Search'
			const isSameAsLastSearch = term === this.lastTextSearch

			if (isSearchingURL) {
				if (modifierKey) {
					this.$root.$emit('ContextMenu:searchbar', term)
					return
				}

				if (isShowingAnalyzer) {
					try {
						const analyzedData = await fetchData('analyzeLink', { term })
						const isError = !!analyzedData.errorCode

						if (isError) {
							EventBus.$emit('analyze_notSupported', analyzedData)
							return
						}

						if (analyzedData.type === 'track') {
							EventBus.$emit('analyze_track', analyzedData)
						}

						if (analyzedData.type === 'album') {
							EventBus.$emit('analyze_album', analyzedData)
						}
						return
					} catch (error) {
						console.error(error)
						return
					}
				}

				// ? Open downloads tab maybe?
				sendAddToQueue(term)
			} else {
				// The user is searching a normal string
				if (isShowingSearch && isSameAsLastSearch) return

				/*
				isShowing 		isSame
				false 				false			Loading
				false 				true			Loading (because component Search is not loaded)
				true 					false			Loading
				true 					true			Never
				*/

				this.lastTextSearch = term
				await this.$router.push({
					name: 'Search',
					query: {
						term
					}
				})
			}
		}
	}
})
</script>

<style>
#search-wrapper {
	width: 100%;
	margin: 0 auto;
}

input[type='search']::-webkit-search-cancel-button {
	-webkit-appearance: none;
	width: 28px;
	height: 28px;
	background-color: var(--foreground);
	-webkit-mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='28' viewBox='0 0 24 24' width='28'%3E%%3Cpath fill='%23ffffff' d='M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z'/%3E3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
	mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='28' viewBox='0 0 24 24' width='28'%3E%%3Cpath fill='%23ffffff' d='M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z'/%3E3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
}

#search {
	align-items: center;
	background-color: var(--secondary-background);
	border-radius: 15px;
	border: 1px solid transparent;
	display: flex;
	margin: 16px;
	overflow: hidden;
	padding: 0 1em;
	transition: border 200ms ease-in-out;
}

#search .search__icon {
	width: 2rem;
	height: 2rem;
}

#search .search__icon i {
	font-size: 2rem;
	color: var(--foreground);
}

#search .search__icon i::selection {
	background: none;
}

#search #searchbar {
	height: 45px;
	padding-left: 0.5em;
	border: 0px;
	border-radius: 0px;
	background-color: var(--secondary-background);
	color: var(--foreground);
	font-size: 1.2rem;
	font-family: 'Open Sans';
	font-weight: 300;
	margin-bottom: 0;
}

#search #searchbar:focus {
	outline: none;
}

#search #searchbar::-webkit-search-cancel-button {
	appearance: none;
	width: 28px;
	height: 28px;
	background-color: var(--foreground);
	mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='28' viewBox='0 0 24 24' width='28'%3E%%3Cpath fill='%23ffffff' d='M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z'/%3E3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
}

#search #searchbar:-webkit-autofill,
#search #searchbar:-webkit-autofill:hover,
#search #searchbar:-webkit-autofill:focus,
#search #searchbar:-webkit-autofill:active {
	box-shadow: 0 0 0 45px var(--secondary-background) inset !important;
}

#search .searchButton {
	background-color: var(--primary-color);
	color: var(--primary-text);
	height: 100%;
	width: 48px;
	display: flex;
	text-decoration: none;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	margin: 0 7px;
}

#search .searchButton i {
	font-size: 2rem;
}

#search .searchButton i::selection {
	background: none;
}

#search:focus-within {
	border: 1px solid var(--foreground);
}

#search.showSearchButton {
	padding: 0 0 0 1em;
}
</style>
