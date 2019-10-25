<template>
  <div class="feature">
      <div v-for="(item,index) in title" :key="item" :class="{'active':index===flag}"
      @click="bgChage(index)"><span >{{item}}</span></div>
  </div>
</template>

<script>
export default {
name:'Feature',
props:{
    title:{
    type:Array,
    defaule(){
        return[]
    }
    }
},
data(){
    return{
        flag:0,
    }
},
methods:{
    bgChage(index){
        this.flag=index;
        this.$emit('typeChage',index)
    }
}
}
</script>

<style scoped>
.feature{
    width:100%;
    display:flex;
    text-align: center;
    background:whitesmoke;
    
}
.feature>div{
    flex:1;
    height:44px;
    line-height: 44px;

}
.feature>div>span{
    padding:5px 7px;
}

.active{
    background:deeppink;
}
.active>span{
    border-bottom:1px solid whitesmoke;
    color:white;
}


</style>