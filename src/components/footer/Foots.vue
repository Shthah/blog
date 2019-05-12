<template>
	<!--<el-footer height="">-->
		<div id="footer" class="footer">
			<div class="container">
				<p>文章中出现的商标及图像版权属于其合法持有人，只供传递信息之用，非商务用途。互动交流时请遵守理性，宽容，换位思考的原则
				<p style="color: #28d0e9">该网站勉强运行 :
					<span id="sitetime" style="color: #28d0e9;">
						{{constructiontime}}
					</span>
				</p>
				<p>
					Copyright© 2019-2019
					<a href="">233</a>
					<a href="" class="highlight">站点</a>
				</p>
			</div>
		</div>
	<!--</el-footer>-->
</template>

<script>
	import {mapGetters} from  'vuex'
	export default {
		computed:mapGetters(['constructiontime']),
		// watch:{
		// 	$route: {
		// 		handler: function (route) {
		// 			let path = route.path;
		// 			this.checkPath(path)
		// 			console.log(path)
		// 		},
		// 		immediate:true
		// 	}
		// },
		// mounted(){
		// 	let timer = setInterval(()=>{  //定时修改 时间  每秒修改一次
		// 		let today = new Date();
		// 		let todayYear = today.getFullYear();
		// 		let todayMonth = today.getMonth()+1;
		// 		let todayDate = today.getDate();
		// 		let todayHour = today.getHours();
		// 		let todayMinute = today.getMinutes();
		// 		let todaySecond = today.getSeconds();
		// 		let t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
		// 		this.$store.dispatch('UPDATE_TIME',t2)
		// 	},1000)
		// },
		// methods:{
		// 	checkPath(path){
		// 		// console.log(path)
		// 		if(/home/.test(path)){
		// 			// console.log(path)
		// 			let timer = setInterval(()=>{  //定时修改 时间  每秒修改一次
		// 				let today = new Date();
		// 				let todayYear = today.getFullYear();
		// 				let todayMonth = today.getMonth()+1;
		// 				let todayDate = today.getDate();
		// 				let todayHour = today.getHours();
		// 				let todayMinute = today.getMinutes();
		// 				let todaySecond = today.getSeconds();
		// 				let t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
		// 				this.$store.dispatch('UPDATE_TIME',t2)
		// 			},1000)
		// 		}
		// 		// if(/login/.test(path)){
		// 		// 	console.log(22222)
		// 		// }
		//
		// 	}
		//
		// },
		// methods:{
		// 	checkPath(path){
		// 		if(/home|lists/.test(path)){
		// 			// console.log(this.$store)
		// 			this.$store.dispatch('UPDATE_MAIN',true)
		// 			this.$store.dispatch('UPDATE_LISTS')
		//
		// 		}
		// 		if(/details/.test(path)){
		// 			// console.log(this.$store)
		// 			this.$store.dispatch('UPDATE_MAIN',false)
		// 		}
		// 	}
		// }
	}
</script>

<style scoped>
	.footer {
		position: relative;
		z-index: 9;
		clear: both;
		margin-top: 20px;
		padding: 30px 0px 4px;
		font-size: 12px;
		line-height: 12px;
		text-align: center;
		background: #2e2e2e;
		box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.8);
		border-top: 1px solid transparent;
		transform: translateY(0);
		opacity: 1;
		overflow: hidden;
		width: 100%;
	}
	.container {
		position: relative;
		margin: 0 auto;
		max-width: 1200px;
		padding: 0;
	}
	
	.container a {
		font-size: 12px;
		color: #9b9ea0;
		transition: .35s
	}
	
	.container a:hover,
	.container p a.highlight {
		color: #28d0e9 !important;
		text-decoration: none;
	}
	
	.container p {
		margin: 0 0 20px;
		font-size: 12px;
		color: #9b9ea0;
	}
	
	.container p a:hover {
		text-decoration: underline
	}
	
	.container p span {
		font-size: 12px;
	}
	
	.container p:nth-child(1) {
		color: #999
	}
</style>