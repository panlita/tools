import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/example/HelloWorld'
import swiper from '@/example/swiper-example'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    }
  ]
})
