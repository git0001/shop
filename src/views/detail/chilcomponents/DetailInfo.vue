<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length!==0">
      <div class="title">
          <p>{{detailInfo.desc}}</p>
      </div>
      <p>{{detailInfo.detailImage[0].key}}</p>
    <div class='img-list'>
        <img :src="item" alt="" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
    </div>
  </div>
</template>

<script>
export default {
name:'DetailInfo',
props:{
    detailInfo:{
        type:Object,
        default(){
            return{}
        }
    }
}
}
</script>

<style scoped>
.detail-info{
    overflow: hidden;
}

.title{
    padding:30px 25px;
    font-size:14px;
    position: relative;
}
.title::before{
    content:'';
    border-bottom:2px solid black;
    border-left:6px solid black;
    width:30%;
    height:5px;
    position:absolute;
    left:10px;
    top:10px;
}
.title::after{
    content:'';
    border-right:6px solid black;
    border-top:2px solid black;
    width:30%;
    height:5px;
    position:absolute;
    right:10px;
    bottom:10px;
}
.detail-info>p{
    padding:0 30px;
}
.img-list>img{
    width:100%
}
</style>