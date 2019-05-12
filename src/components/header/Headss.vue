<template>
	<!--<el-header height="">-->
		<div class="header Top">
			<div class="header_top">
				<div class="header-list">
					<div id="username" style="margin:0 auto;color: red;">
						<a href="" style="display: inline;">欢迎光临</a>
						<router-link style="display: inline;" to="/login">请登陆</router-link>
						<router-link style="display: inline;" to="/reg">免费注册</router-link>
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
					<div class="nav">
						<a href="" class="t-logo" id="Logo">
							<span class="logo"></span>
							<ul >
								<!--修改 添加3个li-->
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</a>
						<!--占位置的-->
						<div class="nav-left">
						</div>
						<div class="brand">
							<p>关注前端开发</p>
							<p>HTML5、CSS3、Javascript</p>
						</div>
						<ul id="music-nav" style="margin-right: 30px; margin-top: -2px;">
							<li detaName="do" class="">
								<!--<a href="index.html">-->
								<!--<span >首页</span>-->
								<!--</a>-->
								<router-link to="/home">首页</router-link>
							
							</li>
							<li detaName="re" class="">
								<a href="">
									<span >心情小镇</span>
								</a>
							</li>
							<li detaName="mi" class="front">
								<a href="" >
									<span>前端开发<i class="fa fa-angle-down"></i></span>
								</a>
							</li>
							<li detaName="fa" class="">
								<a href="">
									<span >时光机</span>
								</a>
							</li>
							<li detaName="sol" class="works">
								<a href="">
									<span>作品欣赏<i class="fa fa-angle-down"></i></span>
								</a>
							</li>
							<li detaName="la" class="">
								<a href="">
									<span >给我留言</span>
								</a>
							</li>
							<li detaName="si" class="">
								<a href="">
									<span >技巧资源</span>
								</a>
							</li>
							<li detaName="dd" class="">
								<a href="">
									<span >关于博客</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		
		</div>
	<!--</el-header>-->
</template>

<script>
	
	export default {
	
	}
	// $("#Logo").hover(function () {
	// 		$("#dj li").css("animation", "move .5s alternate");
	// 	},
	// 	function () {
	// 		$('#dj li').attr("style", "");
	// 	});
</script>

<style scoped>
	.header {
		width: 100%;
		height: 104px;
		/*position: fixed;*/
		/*top: 0;*/
		/*left: 0;*/
		margin-bottom: 20px;
		opacity: 1;
		z-index: 10;
		transition: all 0.8s;
		background: #fff;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.08);
	}
	.header-body {
		height: calc(100% - 28px);
		border-top: 1px solid #fff;
		box-sizing: border-box;
		background: #eaebed;
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#d4d7db');
		background: gradient(linear, left top, left bottom, from(#fff), to(#dedede));
		background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#dedede));
		background: -moz-linear-gradient(top, #fff, #d4d7db);
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
	.site-search.active {
		position: absolute;
		top: 104px;
		left: 0;
		width: 100%;
		background-color: rgba(255, 255, 255, .95);
		display: none
	}
	.container {
		position: relative;
		margin: 0 auto;
		max-width: 1200px;
		padding: 0
	}
	.site-search-form {
		padding: 25px 20%;
		overflow: hidden
	}
	.search-input {
		float: left;
		color: #999;
		border: solid 1px #ddd;
		width: 90%;
		height: 50px;
		line-height: 50px;
		padding: 10px 12px;
		border-right: none;
		font-size: 16px;
		border-radius: 5px 0 0 5px;
		outline: 0;
	}
	.search-btn .fa {
		font-size: 18px;
		width: 18px;
		color: #fff
	}
	.fa-search:before {
		content: "\f002"
	}
	
	.search-btn {
		color: #fff;
		border: none;
		background: #45B6F7;
		height: 50px;
		font-size: 18px;
		padding: 0 12px;
		border-radius: 0 5px 5px 0;
		width: 10%;
		cursor: pointer
	}
	
	.header.hover {
		z-index: 1000;
		height: 76px;
		opacity: 1;
		z-index: 100 !important;
		background: rgba(255, 255, 255, .9);
		box-shadow: 0 0 10px #ccc;
	}
	
	.header.hover .topbar {
		height: auto;
	}
	
	.header.hover ul li a span {
		line-height: 28px
	}
	
	.header.hover .site-search.active {
		top: 76px
	}
	
	.header.hover .navto-search a {
		margin-top: 2px
	}
	
	.header-conter {
		width: 1200px;
		margin: 24px auto 0;
		border-top: 1px solid transparent;
		
		
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
	
	.topbar ul li.github {
		width: 40px;
		height: 100%;
		padding: 0;
	}
	
	.topbar ul li.github a {
		width: 100%;
		height: 28px;
		text-align: center;
	}
	
	.topbar ul li.github a i.iconfont {
		color: #fff;
		font-size: 18px;
		line-height: 28px;
		margin-top: -2px;
		display: block;
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
		position: relative;
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
		bottom: -17px;
		left: 0;
		background: #19ACF7;
		
		
		transition: all 0.5s
	}
	
	.nav ul li>a {
		float: left;
		width: 100%;
		padding: 0 10px;
		position: relative;
		transform-style: preserve-3d;
		transition: all .5s;
		transform-origin: center center -14px;
		height: 25px;
		z-index: 2;
	}
	
	.nav ul li audio {
		display: none
	}
	
	.nav ul li a span {
		text-align: center;
		
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
		
		
		transform: rotateX(-90deg)
	}
	
	.nav ul li a span:nth-of-type(2) {
		position: absolute;
		left: 10px;
		top: -22px;
		
		transform-origin: bottom;
		
		
		transform: rotateX(90deg);
		
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
		
		
		transition: all .35s;
	}
	
	.nav ul li:hover a span i {
		line-height: 30px;
		
		
		transition: all .5s;
		
		transform: rotateX(180deg);
		
		transform: rotateX(180deg)
	}
	
	.nav {
		position: relative
	}
	
	.nav .nav-min {
		position: absolute;
		left: 645px;
		top: 70px;
		z-index: 3;
		
		box-shadow: 0 2px 2px rgba(0, 0, 0, .03);
		border: 1px solid #ddd;
		border-top: 0;
		background: rgba(255, 255, 255, .9);
		
		
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
</style>