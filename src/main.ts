import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/swiper.less'
import '@/assets/less/reset.less'
import '@/assets/less/border.less'
import '@/assets/iconfont/iconfont.less'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
