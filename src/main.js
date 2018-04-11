// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout.vue'
import Indexpage from './pages/index.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/',component:Indexpage}
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
