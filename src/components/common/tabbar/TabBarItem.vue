<template>
  <div class="tab-bar-item" @click='Tabclick'>
      <div class="show" v-if="isclick"><slot name='show'></slot></div>
      <div class="click" v-else><slot name='click'></slot></div>
      <div class="text" :class="{'show':!isclick}"><slot name='text'></slot></div>
  </div>
</template>

<script>
export default {
neme:'TabBarItem',
props:{
    path:{
        type:String,
        default:''
    }
},
 methods: {
     Tabclick(){        
         if(this.$route.path!=this.path ){
         this.$router.replace(this.path).catch(err=>{console.log(err)})
         }
         }
 },
 computed:{
     isclick(){ 
         return this.path.indexOf(this.$route.path)==-1
     }
 }
}
</script>

<style scoped>
.tab-bar-item{
    flex:1;
    text-align:center;
}
.tab-bar-item img{
    width:24px;
    height:24px;
}

.show{
    color:deeppink
}
</style>