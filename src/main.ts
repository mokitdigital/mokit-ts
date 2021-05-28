import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressCard, faBars, faChevronDown, faCommentDollar, faDiceD20, faHandshake, faHeadset, faPeopleCarry, faQuestionCircle, faShareAlt, faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'
import VueTheMask from 'vue-the-mask'
import VueScrollTo from 'vue-scrollto'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import 'animate.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

library.add(
  faBars,
  faChevronDown,
  faAddressCard,
  faDiceD20,
  faPeopleCarry,
  faCommentDollar,
  faHeadset,
  faSignInAlt,
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faTimes,
  faQuestionCircle,
  faShareAlt,
  faHandshake
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueTheMask)

Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
