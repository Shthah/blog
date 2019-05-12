import Vue from 'vue'
import App from './App.vue'
import router from '@/plugins/router';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import  axios from 'axios'

// console.log(axios)
// import $ from './assets/js/jquery.2.2.4.js';
// console.log($)
Vue.config.productionTip = false
// Vue.use(ElementUI)

// import router from './router'

//引入自定义插件  Loading
import  loading from './components/loading'
Vue.use(loading)

//全局过滤器
import filters from './filters'
Object.keys(filters).forEach(key =>Vue.filter(key,filters[key]))

//全局暴露axios
import  './plugins/axios'

// import axios from 'axios';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Vue.prototype.axios = axios;

//服务器资源指向
//全局 baseUrl
let config = require('../config/config')
window.baseUrl = config.baseUrl.localhost

// console.log(baseUrl)


//引入vuex状态管理
import store from './plugins/store'

// console.log(store)

// let Constructiontime = localStorage.getItem('Constructiontime');
// console.log(user)
// console.log(JSON.parse(user))

// Constructiontime && store.commit('UPDATE_TIME',JSON.parse(Constructiontime))


//同步本地数据->状态仓库state
let user = localStorage.getItem('vue_user');
// console.log(user)
// console.log(JSON.parse(user))

user && store.commit('UPDATE_USER',JSON.parse(user))

new Vue({
    router,
	store,
    render: h => h(App)
}).$mount('#app')


