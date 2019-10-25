<template>
<div v-if="baseInfo.columns">
      <div class='detail-base-info'>
      <h3>{{baseInfo.title}}</h3>
      <span class='price'>{{baseInfo.oldPrice}}</span>
      <div class='columns'>
          <span>{{baseInfo.columns[0]}}</span>
          <span>{{baseInfo.columns[1]}}</span>
          <span>72小时发货</span>
      </div>
      <div class='services'>
         <span v-for="(item,index) in baseInfo.services" :key='item.name'>
             <img :src="item.icon" alt="">{{item.name}}</span>
      </div>
    
  </div>  
</div>
</template>

<script>
export default {
    name:'DetailBaseInfo',
    props:{
        baseInfo:{
            type:Object,
            defaule(){
                return{}
            }
        }
    },

}
</script>

<style scoped>
.detail-base-info{
    height:240px;
    padding-top:10px;
    border-bottom:3px solid #ccc;
    box-sizing: border-box;

}
h3{
    margin-bottom:10px;
    width:100%
}

.price{
    font-size:24px;
    font-weight: 700;
    color:red;
}

.columns{
    margin-top:17px;
    display:flex;
}
.columns>span{
    flex:1;
    color:darkgrey
}
.services{
    padding:35px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
span>img{
    width:12px;
    height:12px;
}

</style>