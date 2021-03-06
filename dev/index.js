import './styles/global.css'

import Vue from 'vue'

import GetTextPlugin from '../src/index'
import translations from './translations.json'

import AlertComponent from './components/alert'
import LanguageSelectComponent from './components/languageSelect'
import MomentFilterComponent from './components/momentFilter'
import PluralComponent from './components/plural'


Vue.use(GetTextPlugin, {
  availableLanguages: {
    en_GB: 'British English',
    fr_FR: 'Français',
    it_IT: 'Italiano',
  },
  defaultLanguage: 'en_GB',
  translations: translations,
})

export let vm = new Vue({
  el: '#app',
  components: {
    'alert': AlertComponent,
    'language-select': LanguageSelectComponent,
    'moment-filter': MomentFilterComponent,
    'plural': PluralComponent,
  },
})
