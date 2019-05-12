<template>
	<div class="continar-left" id="continar-left" style="padding:15px;background: #fff;">
		<div class="mod-crumbs" style="margin-top: 66px;">
				<span id="" class="mod-breadcrumb">
					<!--<a href="#">-->
					<router-link to="/home">
						首页
					</router-link>
					<!--</a>-->
					<i>></i>
					<!--<a href="">-->
					<router-link to="/lists">
					<!--心情小镇-->
					{{listone.mark}}
					</router-link>
					<!--</a>-->
					<i>></i>
					<!--为什么我还要留在北上广，一个8年北漂的4点思考-->
					{{listone.tit}}
				</span>
		</div>
		<div class="xiaob">
			<h2 class="title">
				<!--{{lists[this.$router.history.current.params.id-1].tit}}-->
				{{listone.tit}}
			</h2>
			<p class="data-l">
				<span>
					<i class="iconfont icon-shijian1"></i>
					<!--&nbsp; {{lists[this.$router.history.current.params.id-1].time | date}}-->
					{{listone.time | date}}
				</span>
				<span>
					作者：&nbsp;{{listone.user}}
				</span>
				<span>
					<i class="iconfont icon-liulan"></i>
					22次浏览
				</span>
				<span>
					<a href="">
						<i class="iconfont icon-pinglun2"></i>
						<span class="">3条评论</span>
						
					</a>
				</span>
			</p>
		</div>
		<div class="log-text" v-html="listone.content"></div>
	</div>
</template>

<script>
	// import data from  '@/components/main/data/data.json'
	
	import {mapGetters} from 'vuex'
	export default {
		name: "Mainleft",
		computed:mapGetters(['listone']),
		watch:{
			$route: {
				handler: function (route) {
					let path = route.path;
					this.checkPath(path)
				},
				immediate:true
			}
		},
		methods:{
			checkPath(path){
				if(/details/.test(path)){
					// console.log(this.$router.history.current.params.id)
					// this.$store.dispatch("UPDATE_DETAIL" , this.$router.history.current.params.id)
					this.$store.dispatch("UPDATE_LIST",this.$router.history.current.params.id)
					
					
				}
			}
		}
	}
</script>

<style>
	.continar-left {
		width: 820px;
		float: left;
	}
	/* 面包屑导航start */
	.mod-crumbs {
		width: calc(100% + 32px);
		margin-left: -16px;
		height: auto;
		overflow: hidden;
		-webkit-transform: translateY(-65px);
		-ms-transform: translateY(-65px);
		transform: translateY(-65px);
		display: block;
	}
	
	.mod-breadcrumb {
		color: #69bcf3;
		display: block;
		padding: 7px 14px;
		margin: 0;
		list-style: none;
		background: #fafafa;
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='white', endColorstr='whitesmoke');
		background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f5f5f5));
		background: -moz-linear-gradient(top, #fff, #f5f5f5);
		background-repeat: repeat-x;
		border: 1px solid #ddd;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		font-size: 12px;
		-webkit-border-top-left-radius: 3px;
		-webkit-border-top-right-radius: 0;
		-webkit-border-bottom-right-radius: 0;
		-webkit-border-bottom-left-radius: 0;
		-moz-border-radius-topleft: 3px;
		-moz-border-radius-topright: 0;
		-moz-border-radius-bottomright: 0;
		-moz-border-radius-bottomleft: 0;
		border-top-left-radius: 3px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
		background-clip: padding-box;
		border-radius: 3px;
		-webkit-box-shadow: inset 0 1px 0 #fff;
		box-shadow: inset 0 1px 0 #fff;
	}
	.mod-crumbs a {
		color: #08c;
		font-size: 12px;
	}
	.mod-crumbs a:hover {
		text-decoration: underline;
	}
	.mod-breadcrumb i {
		font-size: 12px;
		color: #666;
		text-indent: 4px;
		font-weight: 400;
		font-style: normal;
	}
	.mod-crumbs i {
		display: inline-block;
		margin: 0 2px;
		color: #999;
		font-weight: 700;
		vertical-align: center;
	}
	/* 面包屑导航start */
	h2.title {
		font-size: 24px;
		text-align: center;
		line-height: 40px;
		color: #555;
		-webkit-transform: translateY(-15px);
		-ms-transform: translateY(-15px);
		transform: translateY(-15px);
	}
	p.data-l {
		width: 750px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin: 0 auto;
		padding-bottom: 40px;
		border-bottom: 1px dashed #bbb
	}
	
	p.data-l>span {
		margin: 0 10px;
		color: #666
	}
	
	p.data-l>span i {
		color: #666
	}
	
	p.data-l>span a {
		font-size: 12px;
		color: #666
	}
	
	/**/
	.continar-left .log-text .post-actions *,
	.continar-left .log-text .post-like a.done:hover span.count {
		color: #fff;
	}
	.continar-left .log-text {
		padding-top: 8px
	}
	
	.continar-left .log-text a {
		color: #08c;
		text-decoration: underline;
	}
	
	.log-text li {
		margin: 10px 0;
		line-height: 28px;
	}
	
	.log-text li+p,
	.log-text li+p+p,
	.log-text li+p+p+p,
	.log-text li+p+p+p+p {
		margin: -10px auto 10px;
	}
	
	.codecolorer-container * {
		text-indent: 0
	}
	
	.log-text p {
		font-size: 14px;
		line-height: 30px;
		margin: 15px auto;
		text-indent: 2em;
		color: #666;
	}
	
	.log-text h1 {
		margin-bottom: 10px;
	}
	
	.log-text img {
		display: block;
		margin: 0 auto;
		max-width: 100%;
		height: auto;
		opacity: 1;
		cursor: pointer;
		user-select: none;
	}
	
	.continar-left .log-text ul li {
		line-height: 30px;
		margin-bottom: 15px;
	}
	
	.continar-left .log-text .copy {
		margin-top: 25px;
	}
	
	.log-text h4{
		margin: 15px -15px;
		padding: 8px 15px;
		border-left: 4px solid #39c;
		border-bottom: 1px solid #39c;
		font-size: 16px;
		color: #444;
		background: #fbfbfb;
	}
	
	.log-text h5 {
		padding: 10px 0 10px;
		font-size: 16px;
		color: #555;
		border-bottom: 1px dashed #ccc;
	}
	
	.log-text h4:nth-of-type(5n+1) {
		border-left: 4px solid #b9d329;
		border-bottom: 1px solid #b9d329;
	}
	
	.log-text h4:nth-of-type(5n+2) {
		border-left: 4px solid #ffae5b;
		border-bottom: 1px solid #ffae5b;
	}
	
	.log-text h4:nth-of-type(5n+3) {
		border-left: 4px solid #c0ebf7;
		border-bottom: 1px solid #c0ebf7;
	}
	
	.log-text h4:nth-of-type(5n+4) {
		border-left: 4px solid #69bcf3;
		border-bottom: 1px solid #69bcf3;
	}
</style>