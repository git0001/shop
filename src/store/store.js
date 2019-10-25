import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        shopCar: []
    },
    mutations: {
        addCar(state, payload) {
            let item = null;
            for (let i = 0; i < state.shopCar.length; i++) {
                if (state.shopCar[i].iid === payload.iid) {
                    item = state.shopCar[i]
                    break
                }
            }
            // console.log(state.shopCar)
            if (item) {
                item.number += 1
            } else {
                state.shopCar.push(payload)
            }
        },
        selectClick(state, poy) {
            state.shopCar[poy].isSelect = !state.shopCar[poy].isSelect
        },
    },
    actions: {
        hello() {
            console.log('heelllll')
        }
    },
    getters: {
        carList(state) {
            return state.shopCar.length
        },
        allPrice(state) {
            return '￥' + state.shopCar.filter(item => {
                return item.isSelect
            }).reduce((prc, item) => {
                return prc + item.price * item.number
            }, 0).toFixed(2)
        },
        carLength(state) {
            return state.shopCar.filter(item => {
                return item.isSelect
            }).reduce((prc, item) => {
                return prc + item.number
            }, 0)
        },
        shopCar(state) {
            return state.shopCar
        }
    }
})
export default store