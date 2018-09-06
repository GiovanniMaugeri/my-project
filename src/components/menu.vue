<template>
<div>
  <b-nav class='menu row'>
    <b-nav-item active class=' col col-xs-12 col-md-4' v-on:click = "$emit('welcome')">Welcome</b-nav-item>
    <b-nav-item class=' col col-xs-12 col-md-4' v-on:click = "$emit('form')">Form</b-nav-item>
    <b-nav-item class=' col col-xs-12 col-md-4' v-on:click = "$emit('contact')">Contact us</b-nav-item>
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
.col{
  text-align: center;
}
</style>
