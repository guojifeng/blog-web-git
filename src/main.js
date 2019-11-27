import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import './assets/css/global.css'

// 项目基础地址
axios.defaults.baseURL="http://localhost:80/blog"
//路由拦截器
axios.interceptors.request.use(config=>{
  //配置请求头token
  config.headers.Authorization= window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
