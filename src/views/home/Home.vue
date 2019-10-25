<template>
  <div class='home'>
    <top-bar><div slot='content'>购物街</div></top-bar>
    <feature :title="['流行','精选','新款']"  v-show='topBarShow'
    @typeChage='typeChage' ref='topBar1' class='top-bar1'>
    </feature>
    <scroll :propType='3' :pullUpLoad='true' class='scroll-content' ref='scroll'
    @scroll='scroll' @pullingUp='pullingUp'>
    <main-swiper :swiper="swiper"></main-swiper>
    <recommend></recommend>
    <feature :title="['流行','精选','新款']" 
    ref='topBar' @typeChage='typeChage'></feature>
    <main-goods :data="goods[goodsType].list"></main-goods>
    </scroll>
    <back-top @click.native='BackTopClick' v-show='isShowBackTop'></back-top>
  </div>
</template>

<script>
import TopBar from '../../components/common/topbar/TopBar'
import MainSwiper from '../../components/common/swiper/MainSwiper'
import Recommend from './chilcomponents/Recommend'
import Feature from '../../components/common/feature/Feature'
import MainGoods from '../../components/common/goods/MainGoods'


import Scroll from '../../components/common/scroll/Scroll'

import {getHomeData,getHomeGoods} from '../../network/home.js'

import {debounce} from '../../utils/utils'
import {BackTopMixin} from '../../mixin/backTop'

export default {
    name:'Home',
    data(){
      return{
        swiper:[],
        recommend:[],

        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        goodsType:'pop',

        topBarShow:false,
        topBarTop:0,
        scrollY:0,
      }
    },
    mixins:[BackTopMixin],
    components:{
      MainSwiper,
      Recommend,
      Feature,
      MainGoods,
      Scroll,
      TopBar,
    },
    methods:{
      //数据请求
      getSwiper(){
        getHomeData().then(res=>{
          this.swiper=res.data.data.banner.list;
          this.recommend=res.data.data.recommend.list;
        })
      },
      getGoods(type){
        let page= ++this.goods[type].page
        
        getHomeGoods(type,page).then(res=>{
          let data=res.data.data.list;
          this.goods[type].list.push(...data)
        })
      },
      //feature goodstype改变事件
      typeChage(type){
        switch(type){
          case 0:{
          this.goodsType='pop';
          break;
          };
          case 1:{
            this.goodsType='new';
            break;
          };
          case 2:{
            this.goodsType='sell';
            break;
          }
         
        }
        this.$refs.topBar1.flag=type;
        this.$refs.topBar.flag=type;
      },
      //scroll滚动事件
      scroll(pos){
        //自动吸顶
       this.scrollY=Math.abs(pos.y);
        
       if(this.scrollY>=this.topBarTop-44&&this.scrollY>500){
         this.topBarShow=true
       }else{
         this.topBarShow=false
       }
      },
      pullingUp(){
        this.getGoods(this.goodsType)
      },
   
    },
    created(){
      //数据请求
      this.getSwiper()
      this.getGoods('pop')
      this.getGoods('new')
      this.getGoods('sell')

    },
    mounted(){
      //refresh防抖刷新
      setTimeout(()=>{
      let dbRefresh=debounce(this.$refs.scroll.refresh,10)
      this.$BUS.$on('homeImgLoad',()=>{
        dbRefresh()
        //topbar自动吸顶
        this.topBarTop= this.$refs.topBar&&this.$refs.topBar.$el.offsetTop      
      })
      },30)
    }
    
}
</script>

<style scoped>
.home{
  width:100%;
  height: calc(100vh - 49px );
  overflow: hidden;
}
.home .scroll-content{
  width:100%;
  height:calc(100% - 49px);
  overflow: hidden;
  }
.top-bar1{
  position: absolute;
  z-index: 10;
}
</style>