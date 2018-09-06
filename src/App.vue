<template>
<div >
  <Nav v-on:welcome='showPageA' v-on:form='showPageB' v-on:contact='showPageC'/>
  <MainContent :value="value" />
</div>
</template>

<script>
import MainContent from './components/main-content'
import Nav from './components/menu'
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
      this.value = 1;
    },
    showPageB: function(){
      this.value = 2;
    },
    showPageC: function(){
      this.value = 3;
    }
  }
}
</script>

<style>
#app {
}
</style>
