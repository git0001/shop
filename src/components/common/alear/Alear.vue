<template>
  <div class='alear' v-show='isShow'>
      {{mes}}
  </div>
</template>

<script>
export default {
name:'Alear',
data(){
    return{
        mes:'',
        isShow:false
    }
},
methods:{
    showMes(dey,mes){
        this.isShow=true;
        this.mes=mes;
        setTimeout(() => {
            this.isShow=false;
        }, dey);
    },
}
}
</script>

<style scoped>
.alear{
    padding:13px 18px;
    border-radius: 5px;
    background:rgba(0,0,0,0.5);
    color:snow;
    position:fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    font-size:20px;
}
</style>