/**Created by wyq on 2019/5/8*/

//处理你要干什么，异步请求，判断，或者流程控制，通过 commit 提交到 mutations

import axios  from 'axios';
// import date from "../filters/date";

let actions = {
	//操作 main 的 false 和 true
	UPDATE_MAIN:({state,commit},payload)=>{
		commit('UPDATE_MAIN',payload)
	},
	//操作 home中的ip签名档 的 false 和 true
	UPDATE_IPNEW:({state,commit},payload)=>{
		commit('UPDATE_IPNEW',payload)
	},
	//操作loading 的显示隐藏
	UPDATE_BLOADING:({state,commit},payload)=>{
		commit('UPDATE_BLOADING',payload)
	},
	// 获取用户数据
	UPDATE_USER:({state,commit},payload)=>{
		return axios({
			url:"/api/login",
			// usrl:"./user.json"
			params:{
				username:payload.username,
				password:payload.password
			}
		}).then((res)=>{
			console.log(res)
			if(res.data.error==0){
				commit("UPDATE_USER",res.data)
				return res.data     //返回给下一个
			}else{
				commit("UPDATE_USER",{"error":1})
				return {"error":1}  //返回给下一个
			}
		})
	},
	//获取主页数据
	UPDATE_HOME:({state,commit},payload)=>{
		axios({
			url:'',
			params:{
			
			}
		}).then(
			res => commit('UPDATE_HOME',res.data.data)
		)
	},
	//获取列表页的数据
	UPDATE_LISTS:({state,commit})=>{
		axios({
			// url:'/data/data.json',
			url:'/api/lists',
			params:{
			
			}
		}).then(
			(res)=>{
				// console.log(res.data)
				commit('UPDATE_LISTS',res.data.data)
			}
			// res => commit('UPDATE_LISTS',res.data.data)
		)
	},
	//获取列表页的数据   详情数据和列表数据在一起
	UPDATE_LIST:({state,commit},payload)=>{
		axios({
			url:'/api/lists',
			params:{
				id:payload
			}
		}).then(
			(res)=>{
				
				// console.log(res.data.data,payload)
				commit('UPDATE_LIST',res.data.data)
			}
			// res => commit('UPDATE_LISTS',res.data.data)
		)
	},
	//获取详情页的数据
	// UPDATE_DETAIL:({state,commit},payload)=>{
	// 	axios({
			// url:'/api/'+ payload.dataName +'/'+ payload.id
			// url:'/data/mainleft.json'
		// }).then(
		// 	(res)=>{
				// console.log(res.data,payload)
				// commit('UPDATE_DETAIL',res.data[payload])
			// }
			// res => commit('UPDATE_DETAIL',res.data.data)
		// )
	// },
	// 获取用户数据
	UPDATE_TIME:({state,commit},payload)=>{
		let seconds = 1000;
		let minutes = seconds * 60;
		let hours = minutes * 60;
		let days = hours * 24;
		let years = days * 365;
		let t1 = 1559853382000;
		let diff = payload-t1;
		let diffYears = Math.floor(diff/years);
		let diffDays = Math.floor((diff/days)-diffYears*365);
		let diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
		let diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
		let diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
			
			commit("UPDATE_TIME","  "+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒")
			
	}
	
}

export default actions;