import Vue from 'vue'
import App from './App'
import router from './router'
import changSize from './utils/rem'
Vue.config.productionTip = false

changSize(document, window)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
