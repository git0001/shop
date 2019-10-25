<template>
  <div class="content-item" v-if='item.img'>
      <div class="select" @click='selectClick'><img :src="image" alt="" :class="{'is-select':item.isSelect}"></div>
      <div class="shop-img"><img :src="item.img" alt=""></div>
      <div class="info">
          <div class="title"><h2 class='over'>{{item.title}}</h2></div>
          <div class="des" ><p class='over'>{{item.desc}}</p></div>
          <div class="prc"><span>￥{{item.price}}</span><span>X{{item.number}}</span></div>
      </div>
  </div>
</template>

<script>
export default {
name:'ConentItem',
props:{
    index:{
        type:Number,
        defaule:0
    },
    item:{
        type:Object,
        defaule(){
            return{}
        }
    }
},
data(){
    return{
        image:require('../../../../static/tick.svg')
        // image:require('../../../assets/img/tabbar/profile.svg')
    }
},
methods:{
    selectClick(){
        this.$store.commit('selectClick',this.index)
    }
}

}
</script>

<style  scoped>
.content-item{
    height:160px;
    margin:0 3px;
    border-bottom:1px solid #ccc;
    box-sizing: border-box;
    display:flex;
    padding:3px 1px;
}
.select{
    width:40px;
    height:100%;
    position:relative;
    
}
.select>img{
    width:30px;
    height:30px;
    border:3px solid #ccc;
    border-radius: 50%;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%)
}
.title{
    margin-bottom:10px;
}
.des{
    margin-bottom:40px;
}
.shop-img{
    width:130px;
    height:100%;
}
.shop-img>img{
    width:100%;
    height:100%;
    border-radius: 5px;
}
.info{
    flex:1;
    overflow: hidden;
    padding:2px 3px;
}

.prc{
    display: flex;
    justify-content: space-between;
    font-size:20px;
}

.prc>span:nth-of-type(1){
    color:red;
}

.over{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.is-select{
    background:red
}
</style>