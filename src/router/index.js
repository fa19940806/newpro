import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import news from '@/components/news'
import hh from '@/components/hh'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
        path: '/news',
        name: 'news',
        component: news,
      },
      {
        path: '/hh',
        name: 'hh',
        component: hh,
      },
    ]
    },
   

  ]
})
