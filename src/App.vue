<template>
  <div id="app">
	  <!--<Reg></Reg>-->
	  <!--<Login></Login>-->
	  <!--<Home></Home>-->
	  <!--<Details></Details>-->
	  <!--<router-link to="/">Home</router-link> |-->
	<!---->
	  <loading v-show="bLoading"></loading>
	  <router-view></router-view>
	  <!--<div id="nav">-->
      <!--<router-link to="/">Home</r outer-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <!--<router-view/>-->
  </div>
</template>

<script>
	// import Reg from './views/Reg.vue';
	// import Login from './views/Login.vue';
	// import Home from './views/Home.vue';
	// import Details from './views/Details.vue';
	//
	import {mapGetters} from 'vuex'
	export default {
		// data(){
		// 	return{blloading:false}
		// },
		computed:mapGetters(['bLoading']),
		// watch:{
		// 	$route: {
		// 		handler: function (route) {
		// 			let path = route.path;
		// 			// this.checkPath(path)
		// 			// console.log(path)
		// 		},
		// 		immediate:true
		// 	}
		// },
		// methods:{
			// checkPath(path){
			// 	let timer
			// 	// console.log(path)
			// 	if(/home|lists|details|user/.test(path)){
			// 		// console.log(path)
			// 		timer= setInterval(()=>{  //定时修改 时间  每秒修改一次
			// 			let today = new Date();
			// 			let todayYear = today.getFullYear();
			// 			let todayMonth = today.getMonth()+1;
			// 			let todayDate = today.getDate();
			// 			let todayHour = today.getHours();
			// 			let todayMinute = today.getMinutes();
			// 			let todaySecond = today.getSeconds();
			// 			let t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
			// 			this.$store.dispatch('UPDATE_TIME',t2)
			// 		},1000)
			// 		// console.log(timer)
			// 	}
			// 	// clearInterval(timer)
			// 	// if(/^((?!home|lists|details|user).)*$/.test(path)){
			// 	// if(/^((?!home|lists|details|user).)*$/.test(path)){
			// 	// 	// console.log(22)
			// 	//
			// 	// 	console.log(timer)
			// 	// 	clearInterval(timer)
			// 	// }
			//
			// }
		//
		// },
		// components:{
			// Reg,Login,Home,Details
		// }
	}
</script>
<style scoped>
	/*@import url(./assets/css/public.css);*/
	#app{width: 100%;height: 100%;}
	/*h3{ font-weight:normal}*/
	
</style>
