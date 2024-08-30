import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { createI18n } from 'vue-i18n-bridge'

import { locales } from '@/lang'

Vue.use(VueI18n, { bridge: true })

const storedLocale = window.localStorage.getItem('locale')
const DEFAULT_LANG = storedLocale || 'en'

document.querySelector('html').setAttribute('lang', DEFAULT_LANG)

const i18n = createI18n({
  locale: DEFAULT_LANG,
	legacy: false,
  fallbackLocale: 'en',
  messages: locales,
	// since this is a vue 2 app using the latest vue i18n with the vue-i18n-bridge,
	// there will be some warnings
	// the update from vue 2.6 to vue 2.7 required me to use vue-i18n-bridge anywa,
	// might as well use the latest vue-i18n
	warnHtmlMessage: false,
	warnHtmlInMessage: false,
	silentFallbackWarn: true,
  pluralizationRules: {
    /**
   * @param {number} choice      A choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
   * @param {number} choicesLength  An overall amount of available choices
   * @returns     A final choice index to select plural word by
   */
    ru (choice /*, choicesLength */) {
      const n = Math.abs(choice) % 100
      const n1 = n % 10

      if (n > 10 && n < 20) {
        return 2
      }

      if (n1 > 1 && n1 < 5) {
        return 1
      }

      if (n1 === 1) {
        return 0
      }

      return 2
    }
  }
}, VueI18n)

Vue.use(i18n)

export default i18n
