<template>
  <div class='scroll' ref='scroll'>
      <div class="content" >
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
name:'Scroll',
props:{
    propType:{
        type:Number,
        defaule:0
    },
    pullUpLoad:{
        type:Boolean,
        default:false
    }
},
data(){
    return{
        scroll:null
    }
},
methods:{
scrollTo(x,y,time=300){
    this.scroll.scrollTo(x,y,time)
},
finishPullUp(){
    this.scroll.finishPullUp()
},
refresh(){
    this.scroll.refresh()
}
},

mounted(){
this.scroll=new BScroll(this.$refs.scroll,{
click:true,
probeType:this.probType,
pullUpLoad:this.pullUpLoad,
}),
this.scroll.on('scroll',(pos)=>{
    this.$emit('scroll',pos)
})
this.scroll.on('pullingUp',()=>{
    this.$emit('pullingUp')
})
}

}
</script>

<style scoped>

</style>

