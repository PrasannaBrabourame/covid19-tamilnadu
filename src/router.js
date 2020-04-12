import Vue from 'vue'
import Router from 'vue-router'
import VueChartJS from '@/views/VueChartJS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueChartJS',
      component: VueChartJS
    }
  ]
})
