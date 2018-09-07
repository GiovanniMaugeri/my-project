<template>
<div>
  <b-nav class='menu row'>

      <b-nav-item class='col col-xs-12 col-md-4' to='/content/pageA'>Welcome</b-nav-item>
      <b-nav-item class='col col-xs-12 col-md-4' to='/content/pageB'>Form</b-nav-item>
      <b-nav-item class='col col-xs-12 col-md-4' to='/content/pageC'>Contact us</b-nav-item>
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
