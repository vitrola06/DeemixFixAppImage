import { ref } from 'vue'
import store from '@/store'
import { fetchData } from '@/utils/api'

const favoriteArtists = ref([])
const favoriteAlbums = ref([])
const favoritePlaylists = ref([])
const favoriteTracks = ref([])
const lovedTracksPlaylist = ref('')

const isRefreshingFavorites = ref(false)

const setAllFavorites = data => {
  const { tracks, albums, artists, playlists, lovedTracks } = data

  isRefreshingFavorites.value = false
  favoriteArtists.value = artists || []
  favoriteAlbums.value = albums || []
  favoritePlaylists.value = playlists || []
  favoriteTracks.value = tracks || []
  lovedTracksPlaylist.value = lovedTracks || []
}

const refreshFavorites = async () => {
  isRefreshingFavorites.value = true

  await store.dispatch('refreshSpotifyStatus')

  fetchData('getUserFavorites').then(setAllFavorites).catch(console.error)

}

export const useFavorites = () => ({
  favoriteArtists,
  favoriteAlbums,
  favoritePlaylists,
  favoriteTracks,
  lovedTracksPlaylist,
  isRefreshingFavorites,
  refreshFavorites
})
