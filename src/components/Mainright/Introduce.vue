<template>
	<div class="aside">
		<h3>前端简介</h3>
		<div class="textwidget">
			<p class="clearfix">
				一个关注Web前端开发技术、关注用户体验、坚持更多原创实战教程的个人网站，
				愿景：成为宇宙中最具有代表性的前端博客，期待您的参与,<a rel="nofollow" target="_blank" href="">了解更多...</a>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Introduce"
	}
</script>

<style scoped>
	.aside {
		background: #fff;
		margin-bottom: 20px;
		-webkit-box-shadow: 0 1px 2px #c5c5c5;
		box-shadow: 0 1px 2px #c5c5c5;
		border: 1px solid #eaeaea;
		border-radius: 4px;
		padding: 0 15px 10px 15px;
		-webkit-transition: all .35s;
		-o-transition: all .35s;
		transition: all .35s;
		border-bottom: 0;
	}
	
	.aside:hover {
		-webkit-box-shadow: 2px 2px 8px rgba(0, 0, 0, .2);
		box-shadow: 2px 2px 8px rgba(0, 0, 0, .2)
	}
	
	.aside h3 {
		font-size: 15px;
		color: #fff;
		margin: -1px 0 0 0;
		display: inline-block;
		padding: 4px 15px;
		font-size: 14px;
		background-color: #FF5E52
	}
	
	p.clearfix {
		margin: 10px 0 0;
		line-height: 24px
	}
	
	p.clearfix a {
		-webkit-transition: all .25s;
		-o-transition: all .25s;
		transition: all .25s;
		color: #ea4c89;
	}
	
	p.clearfix a:hover {
		color: #EA4C89
	}
</style>