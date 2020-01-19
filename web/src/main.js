import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './style.scss'
// 引入字体图标
import './assets/iconfont/iconfont.css'

import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles 导入swiper样式
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import Card from './components/Card.vue'
Vue.component('m-card',Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-card-list',ListCard)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:7980/web/api/'
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
