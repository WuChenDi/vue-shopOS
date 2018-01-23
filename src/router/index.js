import Vue from 'vue'
import Router from 'vue-router'
// import Hello from './../components/HelloWorld.vue'
import GoodsList from './../views/GoodsList.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name:'GoodsList',
      component: GoodsList
    }
  ]
})
