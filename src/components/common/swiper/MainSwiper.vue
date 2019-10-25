<template>
    <swiper>
        <swiper-item v-for="(item,index) in swiper" :key="index">
            <img :src="item.image" alt="" @load='load'></swiper-item>
    </swiper>
</template>

<script>
import Swiper from './Swiper'
import SwiperItem from './SwiperItem'
export default {
props:{
    swiper:{
        type:Array,
        defaule(){
            return []
        }
    }
},
name:'MainSwiper',
methods:{
load(){
    // this.$BUS.$emit('swiperLoad')
    this.$BUS.$emit('homeImgLoad')
}
},
components:{
    Swiper,
    SwiperItem
}
}
</script>

<style scoped>

</style>