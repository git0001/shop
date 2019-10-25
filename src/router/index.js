import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import Classify from '../views/classify/Classify.vue'
import ShopCar from '../views/shopcar/ShopCar.vue'
import Me from '../views/me/Me.vue'
import Detail from '../views/detail/Detail.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/classify',
            name: 'Classify',
            component: Classify
        }, {
            path: '/shopcar',
            name: 'ShopCar',
            component: ShopCar
        }, {
            path: '/me',
            name: 'Me',
            component: Me
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: Detail
        }
    ]
})