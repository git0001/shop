<template>
  <div class="goods">
      <slot></slot>
  </div>
</template>

<script>
export default {
name:"Goods",
}
</script>

<style scoped>
.goods{
  
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
}
</style>