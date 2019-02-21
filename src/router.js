import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

import index from './components/index/index'
import coreteam from './components/coreteam/coreteam.vue'
import culture from './components/culture/culture.vue'
import history from './components/history/history.vue'
import news_center from './components/news_center/news_center.vue'
import news_detail from './components/news_detail/news_detail.vue'
import community from './components/community/community.vue'
import position from './components/position/position.vue'
import proIpo from './components/pro-ipo/pro-ipo.vue'
import speedup from './components/speedup/speedup.vue'
import transmission from './components/transmission/transmission.vue'
import tv from './components/tv/tv.vue'
import Case from './components/case/case.vue'
import tv_client from './components/tv_client/tv_client.vue'
import contact_us from './components/contact_us/contact_us.vue'
import about from './components/about/about.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {path: '/',name: 'index',component: index	},
    {path: '/coreteam',name: 'coreteam',component: coreteam	},
    {path: '/culture',name: 'culture',component: culture },
    {path: '/history',name: 'history',component: history},
    {path: '/news_center/:type',name: 'news_center',component: news_center},
    {path: '/news_detail/:id',name: 'news_detail',component: news_detail},
    {path: '/position',name: 'position',component: position},
    {path: '/pro-ipo',name: 'proIpo',component: proIpo},
    {path: '/speedup',name: 'speedup',component: speedup},
    {path: '/transmission',name: 'transmission',component: transmission},
    {path: '/community',name: 'community',component: community},
    {path: '/tv', name: 'tv',component: tv},
    {path: '/case', name: 'case',component: Case},
    {
      path: '/tv_client',
      name: 'tv_client',
      component: tv_client
    },
    {
      path: '/contact_us/:to',
      name: 'contact_us',
      component: contact_us
    },
    {
      path:'/about',
      name:'about',
      component:about
    }
  ]
})
