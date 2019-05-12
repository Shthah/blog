/**Created by wyq on 2019/5/8*/

// 状态管理的配置

import Vue from 'vue';
import  Vuex from 'vuex';

Vue.use(Vuex);  //安装


import actions from '../store/actions'
import mutations from '../store/mutations'
import getters from '../store/getters'
import state from '../store/state'


// console.log(actions)
let store = new Vuex.Store({
	actions,mutations,getters,state
});


export default store


