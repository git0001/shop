<template>
  <div class="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
neme:'TabBar'
}
</script>

<style scoped>
.tab-bar{
    width:100%;
    height:49px;
    display:flex;
    position:fixed;
    bottom:0;
    background: whitesmoke;
}



</style>