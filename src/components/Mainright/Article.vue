<template>
	<div class="classif">
		<h3 class="widget-title">
			<a href=""><i class="fa fa-bars" aria-hidden="true"></i>文章分类</a>
		</h3>
		<div class="items">
			<a href="">HTML/CSS (1)</a>
			<a href="">HTML5 (2)</a>
			<a href="">CSS3详解 (1)</a>
			<a href="">JavaScript (2)</a>
			<a href="">jQuery (3)</a>
			<a href="">Vue.js (4)</a>
			<a href="">Angular.js (5)</a>
			<a href="">Node.js (8)</a>
			<a href="">前端技巧 (2)</a>
			<a href="">前端资源 (0)</a>
			<a href="">前端工具 (1)</a>
			<a href="">wordpress (4)</a>
			<a href="">Webpack (43)</a>
			<a href="">W3c标准 (16)</a>
			<a href="">网站公告 (99)</a>
			<a href="">作品欣赏 (10)</a>
			<a href="">网页设计 (10)</a>
			<a href="">UI设计 (10)</a>
			<a href="">站长必备 (27)</a>
			<a href="">Github开源(3)</a>
			<a href="">WEB兼容 (17)</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Article"
	}
</script>

<style scoped>
	.classif {
		clear: both;
		position: relative;
		margin-bottom: 15px;
		background-color: #fff;
		border-radius: 4px;
		box-shadow: 0 1px 2px #c5c5c5;
		border: 1px solid #eaeaea;
		overflow: hidden;
		transition: all .35s;
		border-bottom: 0
	}
	.fa {
		font-size: 14px;
		position: relative;
		margin-right: 2px;
	}
	.fa {
		margin-right: 7px;
		top: 0;
	}
	.widget-title {
		margin-bottom: 8px;
		border-bottom: 1px solid #bbb;
		position: relative;
	}
	.widget-title a {
		font-size: 15px;
		color: #5e5e5e;
		position: relative;
		text-indent: 10px;
		display: inline-block;
		line-height: 40px;
		cursor: default;
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
	.widget-title a:hover {
		text-decoration: none;
	}
	.items {
		overflow: hidden;
		padding: 5px 0 12px 15px
	}
	.items a {
		color: #999;
		background-color: #f6f6f6;
		float: left;
		width: 31.3333%;
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
	.classif:hover {
		box-shadow: 2px 2px 8px rgba(0, 0, 0, .2)
	}
</style>