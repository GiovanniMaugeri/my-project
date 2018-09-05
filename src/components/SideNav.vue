<template>
  <nav class="bg-dark" v-bind:class='{active : isActive}'>
    <div class="btn btn-default bg-dark" aria-label="Left Align" v-on:click='toggleMenu()'>
      <div id='menu-icon' class='icon' v-bind:class='{"X" : !isActive,"burger" : isActive}'></div>
    </div>
    <ul class="list-unstyled components">
        <li>
              <a>Something</a>
        </li>
        <li>
              <a>Something else</a>
        </li>
        <li>
              <a>About us </a>
        </li>
    </ul>
  <div
  </nav>
</template>

<script>
export default {
  name: 'SideNav',
  data (){
    return {
      isActive: true
    }
  },
  methods:{
    toggleMenu: function(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  width: 300px;
  height: 100vh;
  position: fixed;
  z-index: 999;
  padding: 50px;
  transition: all 0.3s;
}
nav.active{
  transform:translateX(-250px);
}
.btn{
  background-color:pink;
  position: absolute;
  top: 20px;
  right: 10px;
  height: 40px;
  width: 35px;
}
ul{
  padding: 20px 0;
  left: 30px;
}
ul li{
    width: 200px;
    padding: 10px;
    color: white;
    cursor: pointer;
}
a{
    font-size: 1.1em;
    display: block;
}
li:hover{
  background: #333;
}
.icon{
    transition: all 0.6s;
}
.icon.burger{
  height: 3px;
  width: 35px;
  background: white;
  position: relative;
  top: 0;
  left:-13px;
}
.icon.burger::before{
  content: '';
  height: 3px;
  width: 35px;
  position: absolute;
  top: 10px;
  left:-0px;
  background: white;

}
.icon.burger::after{
  content: '';
  height: 3px;
  width: 35px;
  position: absolute;
  top: -10px;
  left:-0px;
  background: white;
}
.icon.X{
  height: 3px;
  width: 30px;
  background: white;
  position: relative;
  transform: rotate(45deg);
}
.icon.X::before{
  content: '';
  height: 3px;
  width: 30px;
  left:0;
  position: absolute;
  background: white;
  transform: rotate(90deg);

}

</style>
