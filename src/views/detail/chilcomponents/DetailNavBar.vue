<template>
  <div class="detail-nav-bar">
      <top-bar>
          <img src="../../../assets/img/common/back.svg" alt="" slot='left' 
          class='img-back' @click='back'>
          <div v-for="(item,index) in title" :key='index' slot='content'
          @click="titleClick(index)" :class="{'active':currentindex==index}">{{item}}</div>
      </top-bar>
  </div>
</template>

<script>
import TopBar from '../../../components/common/topbar/TopBar'
export default {
name:'DetailNavBar',
data(){
return{ 
    title:['商品','参数','评论','推荐'],
    currentindex:0
      }
      },
methods:{
titleClick(index){
    console.log(index)
    this.currentindex=index;
    this.$emit('titleClick',index)
},
back(){
    this.$router.back()
    
}
},
components:{
    TopBar
      }
}
</script>

<style scoped>
.img-back{
    margin-top:11px;
    margin-left:10px;
}
 .active{
    /* background:darkgrey; */
    color:rgba(40, 151, 155, 0.63) !important
}
</style>