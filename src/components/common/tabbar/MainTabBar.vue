<template>
    <tab-bar>
        <tab-bar-item path='/home'>
            <img src="../../../assets/img/tabbar/home.svg" alt="" slot="show" >
            <img src="../../../assets/img/tabbar/home_active.svg" alt="" slot="click">
            <p slot="text">主页</p>
        </tab-bar-item>
        <tab-bar-item path='/classify'>
            <img src="../../../assets/img/tabbar/category.svg" alt="" slot="show">
            <img src="../../../assets/img/tabbar/category_active.svg" alt="" slot="click">
            <p slot="text">分类</p>
        </tab-bar-item>
        <tab-bar-item path='/shopcar'>
            <img src="../../../assets/img/tabbar/shopcart.svg" alt="" slot="show">
            <img src="../../../assets/img/tabbar/shopcart_active.svg" alt="" slot="click">
            <p slot="text">购物车</p>
        </tab-bar-item>
        <tab-bar-item path='/me'>
            <img src="../../../assets/img/tabbar/profile.svg" alt="" slot="show">
            <img src="../../../assets/img/tabbar/profile_active.svg" alt="" slot="click">
            <p slot="text">我的</p>
        </tab-bar-item >
    </tab-bar>
</template>

<script>
import TabBar from './TabBar'
import TabBarItem from './TabBarItem'
export default {
name:'MainTabBar',
components:{
    TabBar,
    TabBarItem
}
}
</script>

<style>

</style>