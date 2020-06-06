import Vue from 'nativescript-vue'
import App from './components/App'

import store from './store.js'
import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}

Vue.registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView)

  
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
// Prints Colored logs when --env.production is *NOT* set while building
Vue.config.debug = (TNS_ENV !== 'production')


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
