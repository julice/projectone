// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout.vue'
import Indexpage from './pages/index.vue'
import detailpage from './pages/detail.vue'
import count from './pages/detail/count.vue'
import forecast from './pages/detail/forecast.vue'
import analysis from './pages/detail/analysis.vue'
import publish from './pages/detail/publish.vue'
import orderlistpage from './pages/orderlist'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(VueResource)

const Router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/',component:Indexpage},
    {path:'/orderlist',component:orderlistpage},
    {path:'/detail',component:detailpage,redirect:'/detail/count',children:[{path:'count',component:count},{path:'forecast',component:forecast},{path:'analysis',component:analysis},{path:'publish',component:publish},]}
  ]
})

// const Router = new VueRouter({
//   routes:[
//     {path:'/foo',component:foo},
//     {path:'/bar',component:foo}
//   ]
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:Router,
  components: {layout },
  template: '<layout/>'
})
