import { ref, computed } from '@vue/composition-api'
import store from '@/store'
import { fetchData } from '@/utils/api'
import { toast } from '@/utils/toasts'
import i18n from '@/plugins/i18n'
import { SPOTIFY_STATUS } from '@/constants'

const favoriteSpotifyPlaylists = ref([])
const isLoggedWithSpotify = computed(() => store.getters.isLoggedWithSpotify)

const isRefreshingSpotifyPlaylists = ref(false)

const setSpotifyPlaylists = response => {
  if (response.error) {
    favoriteSpotifyPlaylists.value = []
    switch (response.error) {
      case 'spotifyNotEnabled':
        store.dispatch('setSpotifyStatus', SPOTIFY_STATUS.DISABLED).catch(console.error)
        break
      case 'wrongSpotifyUsername':
        toast(i18n.t('toasts.wrongSpotifyUsername', { username: response.username }), 'person_off')
        break
      default:
        break
    }
		isRefreshingSpotifyPlaylists.value = false
    return
  }

	isRefreshingSpotifyPlaylists.value = false
  favoriteSpotifyPlaylists.value = response || []
}

const refreshSpotifyPlaylists = async () => {
  isRefreshingSpotifyPlaylists.value = true
  await store.dispatch('refreshSpotifyStatus')

  if (isLoggedWithSpotify.value) {
    const spotifyUser = store.getters.getSpotifyUser.id

    fetchData('getUserSpotifyPlaylists', { spotifyUser }).then(setSpotifyPlaylists).catch(console.error)
  } else {
    favoriteSpotifyPlaylists.value = []
  }
}

export const useSpotifyPlaylists = () => ({
	favoriteSpotifyPlaylists,
	isRefreshingSpotifyPlaylists,
	refreshSpotifyPlaylists 
})
