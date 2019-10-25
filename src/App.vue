<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from './components/common/tabbar/MainTabBar'
export default {
  name: 'App',
  components:{
    MainTabBar,
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
width:100vw;
height:100vh;
}
</style>
