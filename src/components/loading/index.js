/**Created by wyq on 2019/5/6*/


import Loading from './components/Loading.vue'

export default {
	install:function (Vue) {
		Vue.component('loading',Loading) //向全局注册一些组件 全局需要引入 安装
	}
}
