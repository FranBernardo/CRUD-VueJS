import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);
import VuePlaceAutocomplete from 'vue-place-autocomplete';

Vue.use(VuePlaceAutocomplete);

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
