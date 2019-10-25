<template>
  <div class="shop-content">
      <content-item v-for="(item,index) in shopCar" :key='index' :item="item" :index='index'></content-item>
      <shop-car-bottom></shop-car-bottom>
  </div>
</template>

<script>
import ContentItem from './ContentItem'
import ShopCarBottom from './shopCarBottom'
export default {
name:'ShopConent',
data(){
    return{
        shopCar:this.$store.state.shopCar
    }
},
components:{
    ContentItem,
    ShopCarBottom
}

}
</script>

<style scoped>
.shop-content{
    width:100%;
    height:calc(100% - 49px - 44px);
    overflow: hidden;
}
</style>