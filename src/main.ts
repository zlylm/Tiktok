import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueVideoPlayer from 'vue-video-player'

import 'swiper/swiper.less'
import '@/assets/less/reset.less'
import '@/assets/less/border.less'
import '@/assets/iconfont/iconfont.less'
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

Vue.use(VueAwesomeSwiper)
Vue.use(VueVideoPlayer)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
