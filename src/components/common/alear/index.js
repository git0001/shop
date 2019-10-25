import Alear from './Alear.vue'
import Vue from 'vue'

let alear = {}
alear.install = function(vue, ops = {}) {

    let alearCon = Vue.extend(Alear)
    let alearOns = new alearCon()

    alearOns.$mount(document.createElement('div'))

    document.body.appendChild(alearOns.$el)
    Vue.prototype.$alear = alearOns
}
export default alear