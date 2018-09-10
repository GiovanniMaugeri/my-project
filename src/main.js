// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VeeValidate from 'vee-validate';
import VueRouter from 'vue-router'
import MainContent from './components/main-content'
import PageB from './components/PageB'
import PageA from './components/PageA'
import PageC from './components/PageC'

Vue.use(VueRouter)
Vue.use(VeeValidate);
Vue.use(BootstrapVue)
Vue.config.productionTip = false
  
/* eslint-disable no-new */
const router = new VueRouter({
  routes: [
    { path: '/content', component: MainContent,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'pageA',
          component: PageA
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'pageB',
          component: PageB
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'pageC',
          component: PageC
        }
      ]
    }
  ]
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
