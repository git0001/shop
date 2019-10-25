<template>
  <div class="detail">
      <detail-nav-bar  @titleClick='navBarClick' ref='navBar'></detail-nav-bar>
      <scroll class='scroll' ref='scroll' :propType='3' :pullUpLoad='true' 
      @scroll='scroll'>
      <detail-swiper :swiperImg="swiperImg" ref='swiper'></detail-swiper>
      <detail-base-info :baseInfo='baseInfo' ></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo" ></detail-shop-info>
      <detail-info :detailInfo="detailInfo" ></detail-info>
      <detail-goods-info :detailGoodsInfo="goodsInfo" ref='detailInfo'></detail-goods-info>
      <detail-comment :comment="comment"  ref='comment'></detail-comment>
      <detail-goods :data="detailGoods"  ref='detailGoods'></detail-goods>
      </scroll>
      <detail-bottom-bar @addCar='addCar'></detail-bottom-bar> 
      <back-top @click.native='BackTopClick' v-show='isShowBackTop'></back-top> 
  </div>
</template>

<script>
import DetailNavBar from './chilcomponents/DetailNavBar'
import DetailSwiper from './chilcomponents/DetailSwiper'
import DetailBaseInfo from './chilcomponents/DetailBaseInfo'
import DetailShopInfo from './chilcomponents/DetailShopInfo'
import DetailInfo from './chilcomponents/DetailInfo'
import DetailGoodsInfo from './chilcomponents/DetailGoodsInfo'
import DetailComment from './chilcomponents/DetailComment'
import DetailGoods  from '../../components/common/goods/MainGoods'
import DetailBottomBar from './chilcomponents/DetailBottomBar'

import Scroll from '../../components/common/scroll/Scroll'
import {BackTopMixin} from '../../mixin/backTop'
 
import {getDetail,getGoods,getDetailGoods,getRecommend} from '../../network/detail'

import {debounce} from '../../utils/utils'
export default {
name:'Detail',
data(){
    return{
        iid:null,
        swiperImg:[],
        baseInfo:{},
        shopInfo:{},
        detailInfo:{},
        goodsInfo:{},
        comment:{},
        detailGoods:[],
        scrollY:0,
        offsetTopList:[],
        navBarIndex:0,
        timer:null
    }
},
mixins:[BackTopMixin],
components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailInfo,
    DetailGoodsInfo,
    DetailComment,
    DetailGoods,
    DetailBottomBar,
    Scroll
},
methods:{
    scroll(pos){
        this.scrollY=Math.abs(pos.y)
        let length=this.getOffsetTop.length
        let posy=-pos.y
        for(let i =0;i<length;i++){
            console.log(i);
            
        } 
    },
    addCar(){
        let shopCarItem={};
        shopCarItem.iid=this.iid;
        shopCarItem.number=1;
        shopCarItem.isSelect=true;
        shopCarItem.img=this.swiperImg[0];
        shopCarItem.desc=this.baseInfo.desc;
        shopCarItem.price=this.baseInfo.realPrice;
        shopCarItem.title=this.baseInfo.title;
        this.$store.commit('addCar',shopCarItem)
        // this.$store.dispatch('hello',shopCarItem)
        console.log(this.$store.state.shopCar)
        this.$alear.showMes(500,'加入购物车!')
    },
    getOffsetTop(){
    if(this.timer){clearTimeout(this.timer)}
    this.timer=setTimeout(()=>{
    let offsetTopList=[]
   if(!!this.swiperImg.$el){
        offsetTopList.push(this.$refs.swiper.$el.offsetTop)
        offsetTopList.push(this.$refs.detailInfo.$el.offsetTop)
        offsetTopList.push(this.$refs.comment.$el.offsetTop)
        offsetTopList.push(this.$refs.detailGoods.$el.offsetTop)
        this.offsetTopList=offsetTopList
   }
    },100)
    
    },
    navBarClick(index){
        console.log(this.offsetTopList[index]);
        this.$refs.scroll.scrollTo(0,-this.offsetTopList[index])
    }
},
created(){
    this.iid=this.$route.params.id;
    getDetail(this.iid).then(res=>{
        let data=res.data.result
        this.swiperImg=data.itemInfo.topImages;
        this.baseInfo=new getGoods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shopInfo=data.shopInfo
        this.detailInfo=data.detailInfo
        this.goodsInfo=new getDetailGoods(data.itemParams.info,data.itemParams.rule)
        this.comment=data.rate
        
    });
     getRecommend().then((res)=>{
            this.detailGoods=res.data.data.list
          })

},
mounted() {
    let refresh=debounce(this.$refs.scroll.refresh,10)
    let getOffsetTop=debounce(this.getOffsetTop,15)
    this.$BUS.$on('detailImgLoad',()=>{
        refresh()
        getOffsetTop()
    })
},
}
</script>

<style scoped>
.detail{
    height:100vh;
    width:100vw;
}
.scroll{
    height:calc(100vh - 44px - 49px);
    overflow: hidden;
}
</style>