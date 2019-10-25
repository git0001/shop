<template>
  <div class="detail-swiper">
      <swiper>
        <swiper-item v-for='(item,index) in swiperImg' :key='index'>
          <img :src="item" alt="">
        </swiper-item>
      </swiper>
  </div>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper'
import SwiperItem from '../../../components/common/swiper/SwiperItem'
export default {
name:'DetailSwiper',
props:{
    swiperImg:{
      type:Array,
      defaule(){
        return[]
      }
    }
},
components:{
    Swiper,
    SwiperItem
}
}
</script>

<style>

</style>