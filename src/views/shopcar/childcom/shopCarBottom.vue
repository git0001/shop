<template>
  <div class="bottom-bar">
      <div class="left"><img src="../../../assets/img/cart/tick.svg" alt=""
      @click='click' :class="{'active':isall}"><span>全选</span></div>
      <div class="content"><span>合计:</span><span>{{allPrice}}</span></div>
      <div class="right"><span>去计算({{carLength}})</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
name:'BottomBar',
isSelectAll:null,
methods:{
    click(){
        if(this.isall){
            this.shopCar.forEach(item => {
                item.isSelect=false;
                return
            })
        }
        else{
            this.shopCar.forEach(item=>{
                item.isSelect=true
            })
        }
        
    }
},
computed:{
    ...mapGetters(['allPrice','carLength','shopCar']),
    isall(){
        if(this.shopCar.length==0){return false}
        return !this.shopCar.find(item=>!item.isSelect)
    }

}
}
</script>

<style scoped>
.bottom-bar{
    width:100%;
    height:44px;
    display: flex;
    text-align: center;
    line-height: 44px;
    position: absolute;
    bottom:49px;
    font-size: 18px;
    background:#eee;
    /* align-items: center; */

}
.left{
    flex:1;
    /* line-height: 44px; */
}
.left>img{
    width:22px;
    height:22px;
    border:3px solid #ccc;
    border-radius: 50%;
    vertical-align: middle;
}
.content{
    flex:2
}
.right{
    width:120px;
    background:red;
    color:floralwhite;
}

.active{
    background:red;
}
</style>