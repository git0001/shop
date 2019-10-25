<template>
  <div class="mainGoods">
      <goods>
          <goods-item v-for="(item,index) in data" :key="index" :imgdata="item"></goods-item>
      </goods>
  </div>
</template>

<script>
import Goods from './Goods'
import GoodsItem from './GoodsItem'
export default {
name:'MainGoods',
props:{
    data:{
        type:Array,
        defaule(){
            return[]
        }
    }
},
components:{
    Goods,
    GoodsItem
}
}
</script>

<style scoped>

</style>