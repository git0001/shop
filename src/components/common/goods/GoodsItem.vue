<template>
  <div class='goodsItem' @click='GoodsItemClick'  v-if="Object.keys(imgdata).length!==0">
      <img :src="imgs" alt="" @load='load'>
      <div class='itemInfo'>
          <p>{{imgdata.title}}</p>
          <span class="price">￥{{imgdata.price}}</span>
          <span class="cfav">{{imgdata.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
name:'GoodsItem',
props:{
    imgdata:{
        type:Object,
        default(){
            return{}
        }
    }
},
computed: {
    imgs(){
        //这里把顺序调换下会报错,没搞懂为嘛
        return this.imgdata.image || this.imgdata.show.img 
    }
},
methods:{
    load(){
    if(this.$route.path.indexOf('/home')!==-1){
        this.$BUS.$emit('homeImgLoad')
        return
        }
    if(this.$route.path.indexOf('/detail')!==-1){
        this.$BUS.$emit('detailImgLoad')
        return
        
    }
    },
    GoodsItemClick(){
        if(!!this.imgdata.iid){
        this.$router.push('/detail/'+this.imgdata.iid)
        return
        }
        if(!!this.imgdata.item_id){
        this.$router.push('/detail/'+this.imgdata.item_id)        
        return
        }
}
}

}
</script>

<style scoped>
.goodsItem{
    width:48%;
}
.goodsItem>img{
    width:100%;
    border-radius: 5px;
}
.itemInfo{
    font-size: 12px;
}
.itemInfo>p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.itemInfo>.price{
    font-size: 16px;
    color:red;
}
.itemInfo>.cfav{
    position:relative;
    margin-left: 20px;
}
.itemInfo>.cfav::before{
    content: '';
    width:14px;
    height:14px;
    position:absolute;
    left:-15px;
    bottom:2px;
    background:url('../../../assets/img/common/collect.svg')0 0/100% 100%;
}
</style>