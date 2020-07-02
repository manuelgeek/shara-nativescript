import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
import 'nativescript-tailwind/dist/tailwind.css'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
import store from './store'
import Navigator from 'nativescript-vue-navigator';
import { routes } from './router';
Vue.use(Navigator, { routes });

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h(App)
}).$start()
