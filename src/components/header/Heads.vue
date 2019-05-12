<template>
	<!--<el-header height="">-->
		<div class="header Top">
			<div class="header_top">
				<div class="header-list">
					<div id="username" style="margin:0 auto;color: red;">
						<a href="" style="display: inline;">欢迎光临</a>
						<router-link style="display: inline;" to="/login" v-if="user.error">请登陆</router-link>
						<router-link style="display: inline;" to="/reg" v-if="user.error">免费注册</router-link>
						<router-link style="display: inline;" to="/user" v-if="!user.error">{{user.data.nikename}}</router-link>
						<a style="display: inline;" @click="logout" v-if="!user.error">注销</a>
						<!--<a href="" style="display: inline;">请登陆</a>-->
						<!--<a href="" style="display: inline;">免费注册</a>-->
					</div>
					<div class="topbar">
						<div class="notice">
						</div>
						<ul class="last-ul">
							<li><a href="">前端工具箱</a></li>
							<li><a href="">联系我们</a></li>
							<li><a href="">Vip视频</a></li>
							<li><a href="">特别鸣谢</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="header-body">
				<div class="header-conter">
					<nav class="nav">
						<a href="#" class="t-logo" id="Logo">
							<!--LOGO-->
							<img src="/img/logo.png">
						</a>
						<div class="nav-left"></div>
						<div class="brand">
							<p>关注前端开发</p>
							<p>HTML5、CSS3、Javascript</p>
						</div>
						<ul class="music-nav">
							<li detaname="do" class="action"  v-on:mouseenter.self="shift_in($event)" v-on:mouseleave.self="shift_out($event)">
								<!--<a href="/">-->
								<router-link to="/home">
									<span >首页</span>
									<span  >首页</span>
								</router-link>
								<!--</a>-->
								<p style="opacity: 1;"></p>
							</li>
							<li detaname="re" v-on:mouseenter.self="shift_in($event)" v-on:mouseleave.self="shift_out($event)">
								<a href="#">
									<span >心情小镇</span>
									<span >心情小镇</span>
								</a>
								<p style="opacity: 1;"></p>
							</li>
							<li detaname="mi" class="front" v-on:mouseenter.self="shift_in($event)" v-on:mouseleave.self="shift_out($event)">
								<router-link to="/lists">
								<!--<a href="#">-->
									<span>前端开发<i class="iconfont icon-jiantou"></i></span>
									<span >前端开发<i class="iconfont icon-jiantou"></i></span>
								<!--</a>-->
								</router-link>
								<p style="opacity: 1;"></p>
							</li>
							<li detaname="fa" class="" v-on:mouseenter.self="shift_in($event)" v-on:mouseleave.self="shift_out($event)">
								<a href="#">
									<span >时光机</span>
									<span >时光机</span>
								</a>
								<p style="opacity: 1;"></p>
							</li>
							<li detaname="sol" class="works" v-on:mouseenter.self="shift_in($event)" v-on:mouseleave.self="shift_out($event)">
								<a href="#">
									<span >作品欣赏<i class="iconfont icon-jiantou"></i></span>
									<span >作品欣赏<i class="iconfont icon-jiantou"></i></span>
								</a>
								<p style="opacity: 1;"></p>
							</li>
							<li detaname="la" class="" v-on:mouseenter.self="shift_in($event)" v-on:mouseleave.self="shift_out($event)">
								<a href="#">
									<span >别具匠心</span>
									<span >别具匠心</span>
								</a>
								<p style="opacity: 1;"></p>
							</li>
							<li detaname="si" class="" v-on:mouseenter.self="shift_in($event)" v-on:mouseleave.self="shift_out($event)">
								<a href="#">
									<span >碎言碎语</span>
									<span >碎言碎语</span>
								</a>
								<p style="opacity: 1;"></p>
							</li>
							<li detaname="dd" class="" v-on:mouseenter.self="shift_in($event)" v-on:mouseleave.self="shift_out($event)">
								<router-link to="/user">
									<span >个人中心</span>
									<span >个人中心</span>
								</router-link>
								<p style="opacity: 1;"></p>
							</li>
							<!--<li detaname="ddd" class="js_piano_nav_icon mod-header_music-icon hover" title="钢琴音效OFF">-->
								<!--<i></i>-->
								<!--<i></i>-->
								<!--<i></i>-->
								<!--<i></i>-->
								<!--<i></i>-->
							<!--</li>-->
						</ul>
					
					</nav>
				</div>
			</div>
		</div>
	<!--</el-header>-->
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		name:'Heads',
		computed:mapGetters(['user']),
		methods:{
			logout(){
				axios({url:'/api/logout',method:'PUT'}).then(
					res=>{
						if(res.data.error==0){
							this.$store.commit('UPDATE_USER',{error:1});
							localStorage.removeItem('vue_user');
							this.$router.push('/home')
						}
					}
				)
			},
			shift_in(e){
				e.target.lastElementChild.setAttribute("class","yy")
				e.target.setAttribute("class","action")
				// console.log(e.target.lastElementChild)
			},
			shift_out(e){
				e.target.lastElementChild.removeAttribute("class")
				e.target.removeAttribute("class")
			}
		}
	}
	// $("#Logo").hover(function () {
	// 		$("#dj li").css("animation", "move .5s alternate");
	// 	},
	// 	function () {
	// 		$('#dj li').attr("style", "");
	// 	});
</script>
<style scoped>
	   .nav ul li  .yy{height: 74px;}
	  /*.header{height: 100px;}*/
	  .header{height: 115px;}
	  .header-body {
	      /*height: calc(100% - 28px);*/
		  
		  /*margin-bottom: 34px;*/
		  height: 74px;
	      border-top: 1px solid #fff;
	      -webkit-box-sizing: border-box;
	      box-sizing: border-box;
	      background: #eaebed;
	      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#d4d7db');
	      background: gradient(linear, left top, left bottom, from(#fff), to(#dedede));
	      background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#dedede));
	      background: -moz-linear-gradient(top, #fff, #d4d7db);
	      -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, .2);
	      box-shadow: 0 4px 4px rgba(0, 0, 0, .2);
	  }
	
	  .header_top {
		  width: 100%;
		  height: 28px;
		  background: url(./assets/img/nav_bg.gif) repeat-x ;
		  border-bottom: 1px solid #e15671;
	  }
	  .header.Top {
		  animation-duration: .7s;
		  animation-fill-mode: both;
		  animation-name: leftIn;
	  }
	  #Logo {
		  width: 145px;
		  height: 60px;
		  -webkit-transition: .5s;
		  -o-transition: .5s;
		  transition: .5s;
		  display: block;
		  position: absolute;
		  left: 0;
		  top: -13px;
		  overflow: hidden;
	  }

	
	.header.hover {
		z-index: 1000;
		height: 76px;
		opacity: 1;
		z-index: 100 !important;
		background: rgba(255, 255, 255, .9);
		-webkit-box-shadow: 0 0 10px #ccc;
		box-shadow: 0 0 10px #ccc;
	}
	
	.header.hover .topbar {
		height: auto;
	}
	
	.header.hover ul li a span {
		line-height: 28px
	}
	
	
	.header.hover .navto-search a {
		margin-top: 2px
	}
	
	.header-conter {
		width: 1200px;
		margin: 24px auto 0;
		border-top: 1px solid transparent;
		-webkit-transition: all 1s;
		-o-transition: all 1s;
		transition: all 1s;
	}
	
	.header.hover .nav ul.music-nav li.active p {
		height: 46px;
	}
	
	  .topbar {
		  width: 100%;
		  height: 28px;
	  }
	
	  .header-list {
		  width: 1200px;
		  height: 28px;
		  line-height: 28px;
		  color: #fff;
		  margin: 0 auto;
	  }
	
	  .topbar ul {
		  width: 362px;
		  height: 100%;
		  float: right;
		  font-size: 0;
		  text-align: right;
		  overflow: hidden;
	  }
	
	  .topbar ul li {
		  padding: 0 12px;
		  color: #fff;
		
		
		  transition: all .35s;
		  display: inline-block;
	  }
	
	  .topbar ul.last-ul li:not(.github):hover {
		  background: #DE4C5F
	  }
	
	 
	
	  .topbar ul li.github a {
		  width: 100%;
		  height: 28px;
		  text-align: center;
	  }
	
	 
	
	  .topbar ul li a {
		  display: block;
		  color: #fff;
		
		
		  transition: all .35s;
		  font-size: 12px;
		  height: 100%;
		  line-height: 28px;
	  }
	
	  .topbar ul li font {
		  color: #fff
	  }
	
	  #username a font font {
		  color: #fff
	  }
	
	  .topbar ul.last-ul li:nth-child(1) {
		  margin-right: 20px
	  }
	
	  .topbar ul.last-ul li:nth-child(2) {
		  background-color: #DE4C5F;
		  padding: 0 10px;
	  }
	
	  #username {
		  float: left
	  }
	
	  #username a {
		  display: none;
		  float: left;
		  padding: 0 10px;
		  color: #fff;
		  transition: all .35s;
		  font-size: 12px;
		  height: 28px;
		  line-height: 28px;
	  }
	
	  #username a i {
		  padding: 0 3px;
		  color: #fff;
		  font-size: 14px
	  }
	
	  .header .nav ul li a span i {
		  margin-left: 3px
	  }
	
	  .header .nav ul li a span i:nth-of-type(1) {
		  font-size: 14px;
		  margin-right: 5px;
	  }
	
	.topbar ul.last-ul li:nth-child(1) {
		margin-right: 20px
	}
	
	.topbar ul.last-ul li:nth-child(2) {
		background-color: #DE4C5F;
		padding: 0 10px;
	}
	
	#username {
		float: left
	}
	
	#username a {
		display: none;
		float: left;
		padding: 0 10px;
		color: #fff;
		-webkit-transition: all .35s;
		-o-transition: all .35s;
		transition: all .35s;
		font-size: 12px;
		height: 28px;
		line-height: 28px;
	}
	
	#username a i {
		padding: 0 3px;
		color: #fff;
		font-size: 14px
	}
	
	.header .nav ul li a span i {
		margin-left: 3px
	}
	
	.header .nav ul li a span i:nth-of-type(1) {
		font-size: 14px;
		margin-right: 5px;
	}
	
	.nav {
		width: 100%;
		height: 32px;
		margin: 0 auto;
		position: relative
	}
	
	.nav .nav-left {
		font-size: 14px;
		float: left;
		line-height: 16px;
		color: #bbb;
		padding-left: 7px;
		position: relative;
		top: 1px;
		border-left: 1px solid #bbb;
		margin-left: 158px;
		height: 30px;
	}
	
	.brand {
		float: left
	}
	
	.brand p {
		line-height: 16px;
		padding-left: 10px;
		font-size: 14px;
		color: #bbb;
		-webkit-transition: all .6s;
		-o-transition: all .6s;
		transition: all .6s
	}
	
	.brand p:hover {
		color: #666
	}
	
	.nav ul {
		float: right;
		height: 100%;
	}
	
	.nav ul.music-nav {
		margin-right: 70px;
	}
	
	.nav ul li {
		float: left;
		height: 100%;
		line-height: 32px;
		/* perspective:100px;
		-ms-perspective:100px;  */
		position: relative;
		-webkit-transition: all 1s;
		-o-transition: all 1s;
		transition: all 1s;
	}
	
	.nav ul li.front a,
	.nav ul li.works a {
		cursor: default
	}
	
	.nav ul li img {
		position: absolute;
		top: -8px;
		right: 0;
	}
	
	.nav ul li>p {
		width: 100%;
		height: 3px;
		position: absolute;
		bottom: -16px;
		left: 0;
		background: #19ACF7;
		-webkit-transition: all 0.5s;
		-o-transition: all 0.5s;
		transition: all 0.5s
	}
	
	.nav ul li>a {
		float: left;
		width: 100%;
		padding: 0 10px;
		position: relative;
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
		-webkit-transition: all .5s;
		-o-transition: all .5s;
		transition: all .5s;
		-webkit-transform-origin: center center -14px;
		-ms-transform-origin: center center -14px;
		transform-origin: center center -14px;
		height: 25px;
		z-index: 2;
	}
	
	.nav ul li audio {
		display: none
	}
	
	.nav ul li a span {
		text-align: center;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		font-size: 16px;
		display: block;
		height: 26px;
		float: left;
	}
	
	.nav ul.music-nav li:nth-of-type(1) p {
		background: #b9d329
	}
	
	.nav ul.music-nav li:nth-of-type(2) p {
		background: #c0ebf7
	}
	
	.nav ul.music-nav li:nth-of-type(3) p {
		background: #b9d329
	}
	
	.nav ul.music-nav li:nth-of-type(4) p {
		background: #69bcf3
	}
	
	.nav ul.music-nav li:nth-of-type(5) p {
		background: #79d9f3
	}
	
	.nav ul.music-nav li:nth-of-type(6) p {
		background: #ffae5b
	}
	
	.nav ul.music-nav li:nth-of-type(7) p {
		background: #acd180
	}
	
	.nav ul.music-nav li:nth-of-type(8) p {
		background: #fab4cc
	}
	
	.nav ul.music-nav li:nth-of-type(9) p {
		background: #6cf
	}
	
	.nav ul.music-nav li>p {
		-webkit-transition: height 0.25s;
		-o-transition: height 0.25s;
		transition: height 0.25s;
		z-index: 0;
		opacity: 0;
		display: block !important;
	}
	
	.nav ul.music-nav li.active p {
		height: 75px;
		border-radius: 0;
	}
	
	.nav ul.music-nav li:hover a {
		-webkit-transform: rotateX(-90deg);
		-ms-transform: rotateX(-90deg);
		transform: rotateX(-90deg)
	}
	
	.nav ul li a span:nth-of-type(2) {
		position: absolute;
		left: 10px;
		top: -22px;
		-webkit-transform-origin: bottom;
		transform-origin: bottom;
		-ms-transform-origin: bottom;
		-webkit-transform: rotateX(90deg);
		transform: rotateX(90deg);
		-ms-transform: rotateX(90deg)
	}
	
	.nav ul li.action a span {
		color: #19ACF7
	}
	
	.nav ul li.action a span i {
		color: #19ACF7
	}
	
	.nav ul.music-nav li {
		cursor: pointer;
	}
	
	.nav ul li:hover a span {
		color: #444;
		-webkit-transition: all .35s;
		-o-transition: all .35s;
		transition: all .35s;
	}
	
	.nav ul li:hover a span i {
		line-height: 30px;
		-webkit-transition: all .5s;
		-o-transition: all .5s;
		transition: all .5s;
		-webkit-transform: rotateX(180deg);
		transform: rotateX(180deg);
		-ms-transform: rotateX(180deg);
		transform: rotateX(180deg)
	}
	
	.nav {
		position: relative
	}
	
	.nav .nav-min {
		position: absolute;
		left: 606px;
		top: 70px;
		z-index: 3;
		-webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, .03);
		box-shadow: 0 2px 2px rgba(0, 0, 0, .03);
		border: 1px solid #ddd;
		border-top: 0;
		background: rgba(255, 255, 255, .9);
		-webkit-transition: all 0.5s;
		-o-transition: all 0.5s;
		transition: all 0.5s;
		opacity: 0;
		visibility: hidden;
		border-top: 3px solid #19ACF7;
	}
	
	.nav .nav-min:hover {
		opacity: 1 !important;
		top: 49px !important;
		visibility: visible !important;
	}
	
	.nav .nav-min::before {
		content: "";
		height: 0;
		width: 0;
		border: 7px solid transparent;
		position: absolute;
		top: -16px;
		left: 30px;
		border-bottom-color: #19ACF7;
	}
	
	/*跳动的音符start*/
	
	.mod-header_music-icon {
		position: absolute !important;
		right: 35px;
		top: 1px;
		width: 30px;
		height: 30px !important;
		cursor: pointer;
	}
	
	.mod-header_music-icon i:nth-of-type(1) {
		left: 0;
		display: none;
	}
	
	.mod-header_music-icon i {
		width: 2px;
		height: 15px;
		position: absolute;
		bottom: 8px;
		background-color: #666;
		-webkit-transition: all .2s ease;
		-o-transition: all .2s ease;
		transition: all .2s ease;
	}
	
	i {
		font-style: normal;
	}
	
	.mod-header_music-icon i:nth-of-type(2) {
		left: 6px;
		-webkit-transform: rotate(22.5deg);
		-ms-transform: rotate(22.5deg);
		transform: rotate(22.5deg);
		-webkit-transform: rotate(rotate(22.5deg)) scale(1) skew(1deg) translate(10px);
		-ms-transform: rotate(rotate(22.5deg)) scale(1) skew(1deg) translate(10px);
		transform: rotate(rotate(22.5deg)) scale(1) skew(1deg) translate(10px);
	}
	
	.mod-header_music-icon i:nth-of-type(3) {
		left: 12px;
		-webkit-transform: rotate(-22.5deg);
		-ms-transform: rotate(-22.5deg);
		transform: rotate(-22.5deg);
		-webkit-transform: rotate(rotate(-22.5deg)) scale(1) skew(1deg) translate(10px);
		-ms-transform: rotate(rotate(-22.5deg)) scale(1) skew(1deg) translate(10px);
		transform: rotate(rotate(-22.5deg)) scale(1) skew(1deg) translate(10px);
	}
	
	.mod-header_music-icon i:nth-of-type(4) {
		left: 18px;
		-webkit-transform: rotate(22.5deg);
		-ms-transform: rotate(22.5deg);
		transform: rotate(22.5deg);
		-webkit-transform: rotate(rotate(22.5deg)) scale(1) skew(1deg) translate(10px);
		-ms-transform: rotate(rotate(22.5deg)) scale(1) skew(1deg) translate(10px);
		transform: rotate(rotate(22.5deg)) scale(1) skew(1deg) translate(10px);
	}
	
	.mod-header_music-icon i:nth-of-type(5) {
		left: 24px;
		-webkit-transform: rotate(-22.5deg);
		-ms-transform: rotate(-22.5deg);
		transform: rotate(-22.5deg);
		-webkit-transform: rotate(rotate(-22.5deg)) scale(1) skew(1deg) translate(10px);
		-ms-transform: rotate(rotate(-22.5deg)) scale(1) skew(1deg) translate(10px);
		transform: rotate(rotate(-22.5deg)) scale(1) skew(1deg) translate(10px);
	}
	
	.mod-header_music-icon.hover:not(.close) i:nth-of-type(1) {
		-webkit-animation: piano_wave .66s linear infinite;
		animation: piano_wave .66s linear infinite;
	}
	
	.mod-header_music-icon.hover:not(.close) i {
		-webkit-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transform: rotate(rotate(0deg)) scale(1) skew(1deg) translate(10px);
		-ms-transform: rotate(rotate(0deg)) scale(1) skew(1deg) translate(10px);
		transform: rotate(rotate(0deg)) scale(1) skew(1deg) translate(10px);
		background-color: #333;
	}
	
	.mod-header_music-icon.hover:not(.close) i:nth-of-type(2) {
		-webkit-animation: piano_wave .8s linear infinite;
		animation: piano_wave .8s linear infinite;
	}
	
	.mod-header_music-icon.hover:not(.close) i:nth-of-type(3) {
		-webkit-animation: piano_wave .7s linear infinite;
		animation: piano_wave .7s linear infinite;
	}
	
	.mod-header_music-icon.hover:not(.close) i:nth-of-type(4) {
		-webkit-animation: piano_wave .5s linear infinite;
		animation: piano_wave .5s linear infinite;
	}
	
	.mod-header_music-icon.hover:not(.close) i:nth-of-type(5) {
		-webkit-animation: piano_wave .9s linear infinite;
		animation: piano_wave .9s linear infinite;
	}
	
	@-webkit-keyframes piano_wave {
		0% {
			height: 4px
		}
		
		50% {
			height: 18px
		}
		
		to {
			height: 10px
		}
	}
	
	@keyframes piano_wave {
		0% {
			height: 4px
		}
		
		50% {
			height: 18px
		}
		
		to {
			height: 10px
		}
	}
	
	/*跳动的音符end*/

</style>