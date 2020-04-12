import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'chart.js'
import 'hchs-vue-charts'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'

Vue.use(window.VueCharts)
Vue.use(VueChartkick, { Chartkick })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
