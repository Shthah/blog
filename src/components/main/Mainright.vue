<template>
	<div class="continar-right">
		
		<!--<h3>前端简介</h3>-->
		<Introduce></Introduce>
		<!--IP签名档-->
		<Ipnews v-if="ipnew"></Ipnews>
		<!--随机文章-->
		<Randomnews></Randomnews>
		<!--文章分类-->
		<Article></Article>
		<!--<Echarts></Echarts>-->
	</div>
</template>

<script>
	import Introduce from '@/components/Mainright/Introduce';
	import Ipnews from '@/components/Mainright/Ipnews';
	import Randomnews from '@/components/Mainright/Randomnews';
	import Article from '@/components/Mainright/Article';
	// import Echarts from '@/components/Mainright/Echarts';
	
	import {mapGetters} from "vuex"
	export default {
		name: "Mainright",
		computed:mapGetters(['ipnew']),
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
				if(/home/.test(path)){
					this.$store.dispatch('UPDATE_IPNEW',true)
				}
				if(/details|lists|reg|user|login|error/.test(path)){
					this.$store.dispatch('UPDATE_IPNEW',false)
				}
				
			}
		},
		components:{
			Introduce,Ipnews,Randomnews,Article
		}
	}
</script>


<style scoped>
	.continar-right {
		width: 360px;
		float: right;
	}
	
	.continar-right a:hover {
		text-decoration: underline;
	}
	
	/*.continar-right .aside {*/
		/*background: #fff;*/
		/*margin-bottom: 20px;*/
		/*-webkit-box-shadow: 0 1px 2px #c5c5c5;*/
		/*box-shadow: 0 1px 2px #c5c5c5;*/
		/*border: 1px solid #eaeaea;*/
		/*border-radius: 4px;*/
		/*padding: 0 15px 10px 15px;*/
		/*-webkit-transition: all .35s;*/
		/*-o-transition: all .35s;*/
		/*transition: all .35s;*/
		/*border-bottom: 0;*/
	/*}*/
	
	/*.continar-right .aside:hover {*/
		/*-webkit-box-shadow: 2px 2px 8px rgba(0, 0, 0, .2);*/
		/*box-shadow: 2px 2px 8px rgba(0, 0, 0, .2)*/
	/*}*/
	
	.continar-right .aside h3 {
		font-size: 15px;
		color: #fff;
		margin: -1px 0 0 0;
		display: inline-block;
		padding: 4px 15px;
		font-size: 14px;
		background-color: #FF5E52
	}
	
	/*.continar-right p.clearfix {*/
		/*margin: 10px 0 0;*/
		/*line-height: 24px*/
	/*}*/
	
	.continar-right p.clearfix a {
		-webkit-transition: all .25s;
		-o-transition: all .25s;
		transition: all .25s;
		color: #ea4c89;
	}
	
	.continar-right p.clearfix a:hover {
		color: #EA4C89
	}
	
	/*.continar-right .social {*/
		/*display: table;*/
		/*width: 100%;*/
		/*display: none;*/
	/*}*/
	
	.social li {
		height: 30px;
		line-height: 30px;
		float: left;
		margin: 0 0px 0 5px;
		border-radius: 5px 0 5px 0;
		padding: 0 9px;
	}
	
	.social li:nth-of-type(1) {
		margin-left: 0
	}
	
	.social li:last-child {
		margin-right: 0
	}
	
	/*.social .weibo {*/
		/*background: #fc8bd2;*/
	/*}*/
	
	/*.social .qq {*/
		/*background: #b663ff;*/
	/*}*/
	
	/*.social .feed {*/
		/*background: #4cc6fa;*/
	/*}*/
	
	/*.social .email {*/
		/*background: #ffb332;*/
	/*}*/
	
	/*.social .weixin {*/
		/*background: #49cc5b;*/
	/*}*/
	
	.social li a {
		content: "";
		display: block;
		width: 100%;
		height: 30px;
		line-height: 30px;
		color: #fff;
		font-size: 13px;
	}
	
	.social li a:hover {
		text-decoration: none;
	}
	
	.social li a i {
		font-size: 16px;
		color: #fff;
		margin-right: 3px;
	}
	
	/*.widget {*/
		/*background: #fff;*/
		/*margin-bottom: 20px;*/
		/*-webkit-box-shadow: 0 1px 2px #c5c5c5;*/
		/*box-shadow: 0 1px 2px #c5c5c5;*/
		/*border: 1px solid #eaeaea;*/
		/*border-radius: 4px;*/
		/*-webkit-transition: all .35s;*/
		/*-o-transition: all .35s;*/
		/*transition: all .35s;*/
		/*border-bottom: 0*/
	/*}*/
	.widget img{
		width: 100%;
		height: 270px;
	}
	
	/*.Label .daily-list {*/
		/*padding: 5px 10px 10px 10px;*/
	/*}*/
	
	.Label .daily-list>a {
		padding: 5px 9px;
	}
	
	/*.widget:hover {*/
		/*-webkit-box-shadow: 2px 2px 8px rgba(0, 0, 0, .2);*/
		/*box-shadow: 2px 2px 8px rgba(0, 0, 0, .2)*/
	/*}*/
	
	/*.daily-list {*/
		/*font-size: 15px;*/
		/*color: #666;*/
		/*margin-bottom: 10px*/
	/*}*/
	
	.daily-list>p {
		margin-bottom: 7px;
		border-bottom: 1px solid #eee;
		line-height: 27px;
		padding: 0px 15px 10px 15px;
	}
	
	.daily-list>p:last-child {
		padding-left: 15px
	}
	
	/*.widget-title {*/
		/*margin-bottom: 8px;*/
		/*border-bottom: 1px solid #bbb;*/
		/*position: relative;*/
	/*}*/
	
	
	.widget-title a {
		font-size: 15px;
		color: #5e5e5e;
		position: relative;
		text-indent: 10px;
		display: inline-block;
		line-height: 40px;
		cursor: default;
	}
	
	.widget-title a:hover {
		text-decoration: none;
	}
	
	.daily-list ul {
		padding: 2px 15px;
		overflow: hidden;
	}
	
	.widget-title a i {
		float: left;
		width: 40px;
		height: 40px;
		font-size: 18px;
		color: #2f889a;
		line-height: 40px;
		text-align: center;
		padding: 1px 0;
		border-right: 1px solid #ddd;
		border-radius: 2px 0 0 0;
		text-indent: 0;
	}
	
	.widget ul li {
		line-height: 30px;
		margin-bottom: 4px;
		word-break: break-all;
		position: relative;
		float: left;
		white-space: nowrap;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		width: 100%;
	}
	
	.friendship ul li {
		width: 50%;
		transition: 0.35s;
	}
	
	.friendship ul li:hover {
		width: 45%;
	}
	
	/*.daily-title {*/
		/*position: relative;*/
		/*padding-left: 12px;*/
		/*display: block;*/
		/*font-size: 12px;*/
		/*line-height: 18px;*/
	/*}*/
	
	/*.daily-title:before {*/
		/*content: "";*/
		/*display: block;*/
		/*position: absolute;*/
		/*left: -3px;*/
		/*top: 4px;*/
		/*width: 4px;*/
		/*height: 4px;*/
		/*border: 2px solid #ccc;*/
		/*border-radius: 100%*/
	/*}*/
	
	/*.daily-desc {*/
		/*border-left: 2px solid #ccc;*/
		/*padding: 5px 0 0 10px;*/
		/*font-size: 14px;*/
		/*line-height: 18px;*/
		/*margin-bottom: 10px;*/
		/*height: 45px;*/
		/*overflow: hidden*/
	/*}*/
	
	.widget ul li:hover a,
	.widget ul li:hover h3,
	.widget ul li:hover span {
		color: #ea4c89;
		transition: all .35s
	}
	
	.widget ul li:hover span.daily-title:before {
		background: #ea4c89;
		border: 2px solid #ea4c89;
		transition: all .35s
	}
	
	div.com-art ul li {
		font-size: 13px;
		height: 30px;
		line-height: 30px;
		width: 95%;
		overflow: hidden
	}
	
	.widget ul li em {
		background: #ccc;
		color: #fff;
		border-radius: 3px;
		line-height: 18px;
		width: 20px;
		height: 20px;
		font-style: italic;
		display: inline-block;
		position: absolute;
		top: 5px;
		left: 0;
		text-align: center;
		font-size: 15px;
		font-family: "georgia", "STHeiti", "Microsoft YaHei", "simsun", "sans-serif", Arial;
	}
	
	/*.widget ul li i.iconfont {*/
		/*color: #f78585;*/
		/*line-height: 20px;*/
		/*width: 16px;*/
		/*height: 20px;*/
		/*font-style: normal;*/
		/*display: inline-block;*/
		/*position: absolute;*/
		/*top: 6px;*/
		/*left: 0;*/
		/*text-align: center;*/
		/*font-size: 14px*/
	/*}*/
	
	.widget ul li a {
		margin-left: 30px;
		display: block;
		white-space: nowrap;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		height: 30px;
		line-height: 30px;
		position: relative;
		overflow: hidden;
	}
	
	.friendship ul li a {
		margin-left: 25px;
	}
	
	.widget ul li:nth-child(1) em {
		background: #fd8c84
	}
	
	.widget ul li:nth-child(2) em {
		background: #7fd75a
	}
	
	.widget ul li:nth-child(3) em {
		background: #60c4fd
	}
	
	/*.classif {*/
		/*clear: both;*/
		/*position: relative;*/
		/*margin-bottom: 15px;*/
		/*background-color: #fff;*/
		/*border-radius: 4px;*/
		/*box-shadow: 0 1px 2px #c5c5c5;*/
		/*border: 1px solid #eaeaea;*/
		/*overflow: hidden;*/
		/*transition: all .35s;*/
		/*border-bottom: 0*/
	/*}*/
	
	/*.items {*/
		/*overflow: hidden;*/
		/*padding: 5px 0 12px 15px*/
	/*}*/
	
	.items a {
		color: #999;
		background-color: #f6f6f6;
		float: left;
		width: 27.3333%;
		margin: 0 1% 1% 0;
		padding: 0 8px;
		font-size: 12px;
		height: 29px;
		line-height: 29px;
		overflow: hidden;
		transition: all .35s
	}
	
	.items a:hover {
		color: #fff;
		background: #428bca
	}
	
	/*.classif:hover {*/
		/*box-shadow: 2px 2px 8px rgba(0, 0, 0, .2)*/
	/*}*/
	
	/*.pagination {*/
		/*margin-bottom: 20px;*/
		/*padding: 20px;*/
		/*text-align: center;*/
		/*font-size: 12px;*/
		/*display: block*/
	/*}*/
	
	.pagination ul {
		display: inline-block;
		margin-left: 0;
		margin-bottom: 0;
		padding: 0
	}
	
	.pagination ul>li {
		display: inline;
		font-size: 12px
	}
	
	.pagination ul>li>a {
		margin: 0 2px;
		float: left;
		padding: 5px 12px;
		background-color: #ddd;
		color: #666;
		border-radius: 2px;
		opacity: .88
	}
	
	.pagination ul>li>span {
		margin: 0 2px;
		float: left;
		padding: 5px 12px;
		background-color: #ddd;
		color: #666;
		border-radius: 2px;
		opacity: .88
	}
	
	.pagination ul>li.active span {
		background-color: #61B3E6;
		color: #fff
	}
</style>