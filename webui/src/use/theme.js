import { ref, watch } from '@vue/composition-api'

/**
 * @typedef {string} Theme
 */

const THEMES = {
  dark: 'dark',
  light: 'light'
}

const initialTheme = window.localStorage.getItem('selectedTheme') || document.documentElement.dataset.theme || THEMES.dark
const currentTheme = ref(initialTheme)

watch(currentTheme, (newTheme, oldTheme) => {
  // No operation needed
  if (oldTheme === newTheme) return

  window.localStorage.setItem('selectedTheme', newTheme)
  document.documentElement.dataset.theme = newTheme

  animateAllElements()
})

function animateAllElements () {
  // Animating everything to have a smoother theme switch
  const allElements = document.querySelectorAll('*')

  allElements.forEach(el => {
    el.classList.add('changing-theme')
  })

  document.documentElement.addEventListener('transitionend', function transitionHandler () {
    allElements.forEach(el => {
      el.classList.remove('changing-theme')
    })

    document.documentElement.removeEventListener('transitionend', transitionHandler)
  })
}

export const useTheme = () => ({
  THEMES,
  currentTheme
})
