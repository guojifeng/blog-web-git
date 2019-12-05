import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import './assets/css/global.css'

// 项目基础地址
axios.defaults.baseURL="http://localhost:80/blog"
//路由请求拦截器
axios.interceptors.request.use(config=>{
  //配置请求头token
  config.headers.Authorization= window.sessionStorage.getItem('token')
  return config
})

//路由响应拦截器
axios.interceptors.response.use(config=>{
  return config
})

Vue.prototype.$http = axios

Vue.config.productionTip = false



// main.js
function formatDate(date, fmt) {
  date = new Date(date);
  if (typeof(fmt) === "undefined") {
    fmt = "yyyy-MM-dd HH:mm:ss";
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length));
    }
  }
  return fmt
};

//定义一个时间过滤器
Vue.filter("FormatDate", function(date, fmt) {
  return formatDate(date, fmt);
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
