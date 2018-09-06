<template>
<div>
  <b-nav class='menu'>
    
    <b-nav-item active class='nav-item' v-on:click = "$emit('welcome')">Welcome</b-nav-item>
    <b-nav-item v-on:click = "$emit('form')">Form</b-nav-item>
    <b-nav-item v-on:click = "$emit('contact')">Contact us</b-nav-item>
  </b-nav>
</div>

</template>

<script>
export default {
  name: 'attempt',
  data () {
    return {
    }
  },
  methods: {

  }

}
</script>
<style scoped>
.menu{
  background-color: #222;
  display: flex;
  justify-content: space-around;
  padding: 1em;
  color: white;

}
.nav-link{
  color: white;
  text-decoration: none;
}
</style>
