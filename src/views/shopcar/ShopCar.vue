<template>
  <div class="shop-car">
    <top-bar><div slot='content'>购物车({{carLength}})</div></top-bar>
    <shop-content></shop-content>
  </div>
</template>

<script>
import TopBar from '../../components/common/topbar/TopBar'
import ShopContent from './childcom/ShopContent'

import { mapGetters } from 'vuex'

export default {
name:'ShopCar',
components:{
  TopBar,
  ShopContent,
},
computed:{
  ...mapGetters(['carList','carLength'])
  // carlist(){
  //   return this.$store.getters.carList
  // }
}
}
</script>

<style scoped>
.shop-car{
  width:100%;
  height:100vh;
}
</style>