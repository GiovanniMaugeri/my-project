<template>
<div >
  <Nav v-on:welcome='showPageA' v-on:form='showPageB' v-on:contact='showPageC'/>
  <MainContent  />
</div>
</template>

<script>
import MainContent from './components/main-content'
import Nav from './components/menu'


/*const router = new VueRouter({
  routes: [
    {
      path : '/something/:id',component: MainContent,
      children: [
        { path: 'pageA',component: pageA},
        { path: 'pageB',component: pageB},
        { path: 'pageC',component: pageC}
      ]
    }
  ]
})*/
export default {
  name: 'app',
  components: {
    MainContent,
    Nav
  },
  data()  {
    return {
      value : 1
    }
  },
  methods: {
    showPageA: function(){
    //  this.value = 1;
    },
    showPageB: function(){
    //  this.value = 2;
    },
    showPageC: function(){
    //  this.value = 3;
    }
  }
}
</script>

<style>
#app {
}
</style>
