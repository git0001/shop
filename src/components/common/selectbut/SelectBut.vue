<template>
  <div class='select-but'>
      <img src="../../../assets/img/cart/tick.svg" alt="" @click="click">
  </div>
</template>

<script>
export default {
name:'SelectBut',
meethods:{
    click(){
        this.$emit('click')
    }
}
}

</script>

<style>
.select-but{
    text-align: center;
    visibility: hidden;
}
.select-but>img{
    width:16px;
    height:16px;
    border-radius: 50%;
}
</style>