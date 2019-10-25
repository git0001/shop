<template>
  <div class="swiper-item">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'SwiperItem'

}
</script>

<style scoped>
.swiper-item{
    height:100%;
    width:100vw;
}
.swiper-item>img{
    width:100%;
    height:100%
}
</style>