import Vue from 'vue'
import root from './root.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Notify from 'ext/notify.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Notify)

new Vue({
  el: '#root',
  render: h => h(root)
})
