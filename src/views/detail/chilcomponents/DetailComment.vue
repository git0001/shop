<template>
  <div class="comment" v-if="Object.keys(comment).length!==0">
      <div class='title'><span>用户评价:</span><span class='right'>更多。</span></div>
      <div class='user'><img :src="comment.list[0].user.avatar" alt=""><span>{{comment.list[0].user.uname}}</span><br>
      <p>{{comment.list[0].content}}</p>
      <div>
          <span>时间</span>
          <span>{{comment.list[0].style}}</span>
      </div>
      <div class='img-list'>
          <img :src="item" alt="" v-for="(item,index) in comment.list[0].images">
      </div>
      <div></div>
      </div>
  </div>
</template>

<script>
export default {
name:'comment',
props:{
    comment:{
        type:Object,
        defaule(){
            return {}
        }
    }
}
}
</script>

<style scoped>
.title{
    margin:20px;
    padding:20px;
    font-size: 14px;
    border-bottom:3px solid #ccc;
    box-sizing: border-box;
}
.right{
    float:right;
}
.user{
    padding:10px 30px;
}
.user>img{
    width:50px;
    height:50px;
    border-radius: 50%;
    vertical-align:middle;
}

.img-list>img{
    width:100px;
    height:100px;
    margin:0 3px;

}
</style>