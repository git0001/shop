<template>
  <div class="top-bar">
      <dir class="left"><slot name='left'></slot></dir>
      <dir class="right"><slot name='right'></slot></dir>
      <dir class="content"><slot name='content'></slot></dir>
  </div>
</template>

<script>
export default {
name:'TabBar'
}
</script>

<style scoped>
.top-bar{
    width:100%;
    height:44px;
    background:deeppink;
    overflow: hidden;
    position:relative;
    z-index: 10;
}

.top-bar>.left{
  width:60px;
  height:44px;
  float:left;
 }

 .top-bar>.right{
   width:60px;
   height:100%;
   float:right;
 }

 .top-bar>.content{
   height:100%;
   margin-left: 60px;
   margin-right: 60px;
   display: flex;
 }
 .top-bar>.content>div{
   flex:1;
   text-align: center;
   line-height:44px;
   color:white; 
   font-weight: 700;
 }

</style>