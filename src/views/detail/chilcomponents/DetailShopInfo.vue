<template>
  <div class="shop-info">
      <div class='shop-title'>
      <p><img :src="shopInfo.shopLogo" alt="">{{shopInfo.name}}</p>
      </div>
      <div class="left">
          <div><p>{{shopInfo.cSells|Updata}}</p><p>总销量</p></div>
          <div><p>{{shopInfo.cGoods}}</p><p>全部宝贝</p></div>
      </div>
      <div class="right">
          <p v-for="(item,index) in shopInfo.score"><span>{{item.name}}</span>
          <span :class="{'active':item.isBetter,}" class='span-num'>{{item.score}}</span></p>
      </div>
      <button class='but'>进店逛逛</button>
  </div>
</template>

<script>
export default {
name:'ShopInfo',
props:{
    shopInfo:{
        type:Object,
        defaule(){
            return{}
        }
    }
},
filters:{
    Updata(val){
        return (val/1000).toFixed(1)+'万'
    }
}
}
</script>

<style scoped>
.shop-info{
    height:150px;
    padding-top:10px;
    font-size:20px;
    padding: 20px 30px;
    border-bottom: 3px solid #ccc;
}

.shop-title img{
    margin-left:20px;
    display:inline-block;
    vertical-align:middle;
    border-radius: 50%;
    width:60px;
    height:60px;
    }
.left,.right{
    display: inline-block;
    width:40%;
    padding:10px 10px;
    box-sizing:border-box;
    vertical-align: top;
}
.left{
    padding-top:30px;
    
}
.left>div{
    font-size:12px;
    text-align: center;
    display:inline-block;
}

.right{
    margin-top:8px;
    padding-left:30px 0 10px 30px ;
    font-size:12px;
    
}
.span-num{
    color:green;
}

.active{
    color:red
}

.but{
    display: block;
    width: 100px;
    height:20px;
    margin:0 auto;
    background: #ccc;

}
</style>