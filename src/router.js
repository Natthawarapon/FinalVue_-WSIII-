import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import categories from './views/categories.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/categories',
      name: 'categories',
      component: categories,
      component: () => import(/* webpackChunkName: "about" */ './views/categories.vue')
    }
  ]
})
