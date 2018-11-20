import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Detail from '@/pages/detail/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
