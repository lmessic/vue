import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '*',
      redirect: '/home',
      component: home,
      children: [
        {
          path: '',
          name: '文学作品',
          component: () => import('@/views/literary')
        }
      ]
    },
    {
      path: '/home',
      name: '首页',
      component: () => import('@/views/home')
    }
  ]
})
