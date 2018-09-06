<template>
<div>
  <b-nav class='menu'>
    <b-nav-item active class='nav-item'>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
  </b-nav>
</div>

</template>

<script>
export default {
  name: 'attempt',
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
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
