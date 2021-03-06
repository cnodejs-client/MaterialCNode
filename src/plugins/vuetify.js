import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VToolbar,
  VGrid,
  VBtn,
  VIcon,
  VBottomNav,
  VTabs,
  VCard,
  VDivider,
  VTextField,
  VSnackbar,
  VAvatar,
  VChip,
  VAutocomplete,
  VDialog,
  VSwitch,
  transitions,
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'
import { Ripple, Scroll, Touch } from 'vuetify/es5/directives'
import zhHans from 'vuetify/src/locale/zh-Hans'

Vue.use(Vuetify, {
  components: {
    VApp,
    VToolbar,
    VGrid,
    VBtn,
    VIcon,
    VBottomNav,
    VTabs,
    VCard,
    VDivider,
    VTextField,
    VSnackbar,
    VAvatar,
    VChip,
    VAutocomplete,
    VDialog,
    VSwitch,
    transitions,
  },
  theme: {
    // primary: '#ee44aa',
    // secondary: '#424242',
    // accent: '#82B1FF',
    // error: '#FF5252',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FFC107',
  },
  directives: {
    Ripple,
    Scroll,
    Touch,
  },
  customProperties: true,
  iconfont: 'md',
  lang: {
    locales: { zhHans },
    current: 'zh-Hans',
  },
});
