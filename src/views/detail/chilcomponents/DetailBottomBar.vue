<template>
  <div class="detail-bottom-bar">
      <div class="left">
        <div><div></div><p>客服</p></div>
        <div><div></div><p>店铺</p></div>
        <div><div></div><p>收藏</p></div>
        </div>
      <div class="right">
        <div @click='addCar'><p>加入购物车</p></div>
        <div><p>购买</p></div>
      </div>
  </div>
</template>

<script>
export default {
name:'DetailBottomBar',
methods:{
    addCar(){
        this.$emit('addCar')
    }
}

}
</script>

<style scoped>
.detail-bottom-bar{
    width:100%;
    height:49px;
    background-color:#fff;
    position: absolute;
    z-index: 10;
    display: flex;
}
P{
    text-align: center
}
.right div p{
    margin:20% 0;
}
.left{
    flex:1;
    display:flex;
    
}
.right{
    flex:1;
    display:flex;
}
.left div{
    flex:1;
}
.right div:nth-of-type(1){
    flex:1;
    background-color:yellow;
}
.right div:nth-of-type(2){
    flex:1;
    background-color:deeppink;
    }
.left>div>div{
   
    height:60%;
    background:url('../../../assets/img/detail/detail_bottom.png') no-repeat 55% 41%/45%;
}
</style>