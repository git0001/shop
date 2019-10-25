<template>
  <div class="detail-goods-info" v-if="Object.keys(detailGoodsInfo).length!==0">
    <table v-for="(item,index) in detailGoodsInfo.sizes" :key='index' >
        <tr v-for="(ritem,index) in item" :key='index'>
            <td v-for="(ditem,index) in ritem "  :key='index'>{{ditem}}</td>
        </tr>
    </table>
    <table>
        <tr v-for="(item,index) in detailGoodsInfo.infos" :key="index"> 
            <td>{{item.key}}</td>
            <td>{{item.value}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
name:'DetailGoodsInfo',
props:{
    detailGoodsInfo:{
        type:Object,
        defaule(){
            return{
            }
        }
    }
},
data(){
    return{

    }
},

}
</script>

<style scoped>
.detail-goods-info{
    padding:20px;
    text-align: center;  
    box-sizing: border-box;

}
table{
    background:yellow;
    margin:5px;
    box-sizing: border-box;

}
</style>