// <template>
  <div class='swiper'  >
      <!-- <div class="swiper-item-list" ref='list'  @mouseover="mouOver" @mouseleave="mouLeave"> -->
      <div class="swiper-item-list" ref='list'>
          <slot></slot>
      </div>
      <div class='pos-item' v-if='ItemLength && ItemLength>1'>
          <div v-for="(item,index) in ItemLength" :key='index'
           :class="{'show-active':item == smlIdx}"
           @click="toImg(item)"></div>
      </div>
      <div class='moveClick' @touchstart="mouseOver"  >
      <div class="left" @click="leftClick" ><</div>
      <div class="right" @click="rightClick" >></div>
      </div>
      <!-- <div class="left" @click="leftClick" v-show='clickShow'><</div>
      <div class="right" @click="rightClick" v-show='clickShow'>></div> -->
  </div>
</template>

<script>
export default {
name:'Swiper',
data(){
    return{
        currentIndex:0,
        playFalg:null,
        listStyle:{},
        ItemLength:0,
        isScroll:null,
        clickShow:false,
        clientWidth:document.body.clientWidth,
    }
},
methods: {
    mouseOver(){
        console.log('llllll')
    },
    //动画实现函数 
    //  添加dom   获得width
    handlDom(){
       setTimeout(()=>{
        let swiperEl=this.$refs.list;
        let swiperItemEl=swiperEl.getElementsByClassName('swiper-item')

        this.ItemLength=swiperItemEl.length
        
        if(this.ItemLength>1){
            let fastclone=swiperItemEl[0].cloneNode(true);
            let lateclone=swiperItemEl[this.ItemLength-1].cloneNode(true)

            swiperEl.insertBefore(lateclone,swiperItemEl[0])
            swiperEl.appendChild(fastclone)  
            this.listStyle=this.$refs.list.style;
            this.setTransform(-this.clientWidth);  
        }
       },100)
        
        // 这里也可以获得屏幕宽度。  swiperEl.offsetWidth

    },
    //播放函数
    startPlay(){
        if(this.playFlag){
        this.clearPlay()
        }
        this.playFlag=setInterval(()=>{
            this.currentIndex++
            // console.log(this.currentIndex)
            // console.log(this.isScroll)
            let pos=this.currentIndex*this.clientWidth
            this.startScorll(pos)
        }, 2000)
    },
    //停止播放
    clearPlay(){
        clearInterval(this.playFlag);
        this.playFlag=null;
    },
    //滚动函数    transition实现
    startScorll(pos){
        this.isScroll=true;
        this.listStyle.transition="transform 300ms";
        this.setTransform(-pos);
        this.checkPos()
        this.isScroll=false
    },
    //效验位置函数
    checkPos(){
        setTimeout(()=>{
            
        if(this.currentIndex>this.ItemLength+1){
            this.listStyle.transition='0s';
            this.currentIndex=1;
            this.setTransform(-this.currentIndex*this.clientWidth)
        }else if(this.currentIndex<=0){
            this.listStyle.transition='0s';
            this.currentIndex=this.ItemLength;
            this.setTransform(-this.currentIndex*this.clientWidth)
        }
        },2000)
    },
    //移动函数
    setTransform(pos){
        this.listStyle.transform=`translate3d(${pos}px,0,0)`
    },
    //-------end--------

    //点击移动函数
    mouOver(){
        // console.log('mouover')
        this.clearPlay();
        this.clickShow=true;
    },
    mouLeave(){
        this.startPlay();
        this.clickShow=false;
        // console.log('mousddddddd');
        
    },
    leftClick(){
        if(!this.isScroll){
        this.currentIndex--
        this.startScorll(this.currentIndex*this.clientWidth)
        }
        return
        
    },
    rightClick(){
    if(!this.isScroll){
        this.currentIndex++;
        this.startScorll(this.currentIndex*this.clientWidth)
        }
        return
    },
    //圆点点击事件
    toImg(item){
        if(!this.isScroll){
             this.startScorll(item*this.clientWidth);
             this.currentIndex=item;            
        }
    }
},
computed:{
    smlIdx(){
        if(this.currentIndex>this.ItemLength){
            return 1
        }
        if(this.currentIndex<1){
            return this.ItemLength 
        }
        return this.currentIndex
    }

},
mounted(){
    //这里用计时器是防止图片数据没有传送过来，下面操作dom的时候出错
    setTimeout(()=>{
    this.handlDom()
    this.startPlay()
    },100)
}

}
</script>

<style scoped>
/* 轮播样式 */
.swiper{
    height:250px;
    width:100%;
    overflow: hidden;
    position:relative;
}
.swiper-item-list{
    height:100%;
    width:600%;
    position:absolute;
}
.swiper-item-list>div{
    float: left;
}


/* 黑点样式 */
.pos-item{ 
    position:absolute;
    overflow: hidden;
    left: 50%;
    bottom:20px;
    transform:translate(-50%,0);
}
.pos-item>div{
    float:left;
    width:10px;
    height:10px;
    margin:0 3px;
    border-radius: 50%;
    background:rgba(0, 0, 0, 0.5);

}

.pos-item>.show-active{
    background-color:whitesmoke;
}

/* 点击移动 */
.moveClick{
    width:100%;
    height:100%;
    position:absolute;

}
.moveClick:hover{
    display:block;
}
.left,.right{
    width:50px;
    height:50px;
    background:rgba(0, 0, 0, 0.4);
    color:white;
    font-size:36px;
    text-align: center;
    position:absolute;
    border-radius:50%;
    top:50%;
}
.left{
    transform:translateY(-50%);
}
.right{
    right:0;  
    transform:translateY(-50%);
}




</style>