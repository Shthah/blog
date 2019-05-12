<template>
	<div class="user">
		<Heads></Heads>
		<div class="continar">
			<div class="continar-left" id="details">
				<!-- 用户中心头部start -->
				<div class="head_user_b">
					<div class="head_user">
						<div class="head_user_a">
							<div class="head_avatar">
								<a >
									<!--<m class="head_user_avatar_aa"  @/assets/img/ttx.png>-->
										<img :src="this.$store.getters.user.data.icon" class="avatar" width="160" height="160" />
									<!--</m>-->
									<span class="verify_1"></span>
								</a>
							</div>
							<div class="head_avatar_a">
								<p>
									{{this.$store.getters.user.data.nikename}}
									<i class="img-icon icon_male"></i>
									<!--<span title="等级：45级" style="vertical-align: 0px;" class="lv lv45"></span>-->
									<a href="" title="VIP 6" class="vip_aa">
										<img src="@/assets/img/vip9.png" class="vip_ico vip6" />
									</a>
								</p>
							</div>
							<div class="head_avatar_b">
								<p> 管理员 </p>
							</div>
							<div class="head_avatar_c">
								<span class="follow-btn unfollowed"><i class="fa fa-plus"></i> 关 注</span>
							</div>
						</div>
						<div class="head_user_data">
							<!--<span>人气：9999+</span>-->
							<!--<span>粉丝：998</span>-->
							<!--<span>关注：1983</span>-->
							<span>人气：9999+</span>
							<span>粉丝：{{this.$store.getters.user.data.fans}}</span>
							<span>关注：{{this.$store.getters.user.data.follow}}</span>
						</div>
					</div>
				</div>
				<!-- 用户中心头部end -->
				<h4 class="h4">站长简介</h4>
				<ul class="clearfix">
					<li class="limit_w"><span>姓名：xx</span><span>名族：xx</span></li>
					<li class="limit_w"><span>星座：金牛xx座</span><span>学历：xx</span></li>
					<li class="limit_w"><span>籍贯：xx</span></li>
					<li class="limit_w"><span>专业：xx</span></li>
					<li class="" style="margin-bottom:0"><span>职业：Web前端开发工程师</span></li>
					<li><span>坐标：上xx海 - xx</span></li>
					<li class="zw_li h5">
						<span class="career">自我说明：</span>
					</li>
					<li class="index">
						XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxx
					</li>
					
					<li><span class="career">职业生涯：</span></li>
					
					<li class="index">
						XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
						XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
						XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
					</li>
					
				</ul>
				<h4 class="h4">博客介绍</h4>
				<p class="px">
					XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
					XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
				</p>
				<p class="px">
					XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
				</p>
				<p class="px">
					XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
					XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
					XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
					XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
				</p>
			</div>
			<!-- 左侧区域结束 -->
		</div>
		<Foots></Foots>
	</div>
</template>

<script>
	import Heads from '../components/header/Heads.vue';
	import Foots from '../components/footer/Foots.vue';
	
	
	import store from '../plugins/store.js'
	import {mapGetters} from 'vuex'
	export default {
		name: "User",
		beforeRouteEnter(to,from,next){
			if(store.state.user.error==0){
				next()
			}else{
				next('/login')
			}
		},
		components: {
			Heads,Foots
		},
		watch:{
			$route: {
				handler: function (route) {
					let path = route.path;
					this.checkPath(path)
				},
				immediate:true
			}
		},
		computed:mapGetters(['user']),
		methods:{
			checkPath(path){
				if(/user/.test(path)){
					// console.log(this.$store.getters.user)
					// console.log(user)
					// console.log(this.$store)
					// this.$store.dispatch('UPDATE_USER',true)
				}
				
			}
		}
		
	}
</script>
<style scoped>
	.continar {
		width: 1200px;
		min-height: 500px;
		/*margin: 128px auto 50px;*/
		margin: 20px auto 50px;
		overflow: hidden
	}
	#details {
		border-radius: 5px;
		background: #fff;
		padding: 15px;
		border: 1px solid #e6e6e6;
		overflow: hidden;
		float: none;
		margin: 0 auto;
		width: 1000px;
	}
	.head_user_b {
		width: 100%;
		margin: 0 auto;
		background: url('../assets/img/10.jpg') no-repeat center center;
		background-size: 100% 100%;
	}
	
	.head_user {
		overflow: hidden;
		position: relative;
		width: 100%;
		margin: 0px auto 6px;
		border-bottom: 5px solid #fff;
		-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.46);
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.46);
	}
	
	.head_user_a {
		height: 300px;
	}
	
	.head_avatar {
		text-align: center;
		padding-top: 20px;
		margin-bottom: 15px;
	}
	
	.head_avatar_a {
		text-align: center;
		font-size: 25px;
		line-height: 30px;
		color: #fff;
		position: relative;
	}
	
	.head_avatar_a p {
		text-align: center;
		font-size: 25px;
		line-height: 30px;
		color: #fff;
	}
	
	m.head_user_avatar_aa {
		position: relative;
	}
	
	span.verify_1 {
		background-image: url("../assets/img/icon_a.png");
		background-position: -50px -25px;
		width: 20px;
		height: 20px;
		border-radius: 100%;
		margin-left: -33px;
		cursor: pointer;
		position: absolute;
		bottom: 0;
		margin-bottom: -56px;
	}
	
	.head_avatar img {
		width: 130px;
		height: 130px;
		border-radius: 100%;
		border: 3px solid rgba(255, 255, 255, 0.53);
	}
	
	.head_avatar_a {
		text-align: center;
		font-size: 25px;
		line-height: 30px;
		color: #fff;
	}
	
	.icon_male {
		background-position: -100px -50px;
	}
	
	.img-icon {
		display: inline-block;
	}
	
	.icon_male,
	.icon_female {
		width: 16px;
		height: 18px;
		vertical-align: -2px;
		margin: 0 5px;
		background-image: url("../assets/img/icon_a.png");
	}
	
	.lv45 {
		background-position: -199px -335px;
	}
	
	.lv {
		display: inline-block;
		background: url('../assets/img/lv.png') no-repeat;
		width: 33px;
		height: 17px;
		vertical-align: sub;
	}
	
	.head_avatar_a {
		text-align: center;
		font-size: 25px;
		line-height: 30px;
		color: #fff;
	}
	
	.head_avatar_a .vip_aa img {
		vertical-align: inherit;
	}
	
	.head_avatar_b p {
		text-align: center;
		font-size: 12px;
		color: #fff;
		line-height: 16px;
	}
	
	.head_avatar_c {
		text-align: center;
		margin: 25px;
	}
	
	span.follow-btn.unfollowed {
		border: 1px solid #F77268;
		background: #fa7d3c;
	}
	
	span.follow-btn.unfollowed i {
		color: #fff
	}
	
	.head_avatar_c span {
		padding: 7px 12px;
		background-color: #fafafa;
		margin: 15px;
		border-radius: 2px;
		font-size: 15px;
		border: 1px solid #2196F3;
		background: #2196F3;
		color: #FFFFFF;
		cursor: pointer;
	}
	
	Inherited from div.head_avatar_c .head_avatar_c {
		text-align: center;
		margin: 25px;
	}
	
	.head_user_data {
		position: absolute;
		left: 0;
		z-index: 1;
		background: #fff;
		margin-top: -29px;
		padding: 5px 10px;
		border-radius: 0 10px 0px 0;
	}
	
	.head_user_data span {
		margin-right: 20px;
	}
	
	.lv45 {
		background-position: -199px -335px;
	}
	
	.zw_li {
		margin-top: 55px;
		clear: both;
	}
	.h4{
		margin: 10px -15px;
		padding: 6px 15px;
		border-left: 4px solid #39c;
		border-bottom: 1px solid #39c;
		font-size: 16px;
		color: #444;
		background: #fbfbfb;
	}
	.continar-left ul.clearfix li {
		font-size: 14px;
		padding: 0 20px;
		line-height: 36px;
	}
	.continar-left ul.clearfix li span:nth-child(1) {
		width: 50%;
		line-height: 36px;
		float: left;
	}
	.continar-left ul.clearfix li span.career {
		font-size: 16px;
		margin-top: 10px;
	}
	
	.continar-left ul li.index {
		text-indent: 2em;
		clear: both;
		margin-bottom: 10px;
	}
	
	.continar-left .px {
		text-indent: 2em;
		margin-bottom: 10px;
		color: #666;
	}
	.continar-left .px{
		font-size: 14px;
		padding: 0 20px;
		line-height: 36px;
	}
</style>