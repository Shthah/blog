<template>
	<div class="widget mouseover">
		<div class="daily-list">
			<h3 class="widget-title"><a href=""><i class="fa fa-bars" aria-hidden="true"></i>随机文章</a></h3>
			<ul>
				<li v-for="(item,index) of lists">
					<em>{{index+1}}</em>
					<a href="" title="">
						{{item}}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Randomnews",
		data(){
			return{
				lists:['JS事件重复绑定及触发多次的解决方法','PHP获取QQ信息和头像','网站代码中暗藏JS挖矿代码脚本','PHP获取目标网站标题源码','使用Shell脚本掩盖Linux服务器上的操作痕迹','系统、办公、设计等工具万能注册机','网易云音乐最新解析API','神兽Helen涂鸦织梦主机官网，反被爆菊']
			}
		}
	}
</script>

<style scoped>
	.widget {
		background: #fff;
		margin-bottom: 20px;
		-webkit-box-shadow: 0 1px 2px #c5c5c5;
		box-shadow: 0 1px 2px #c5c5c5;
		border: 1px solid #eaeaea;
		border-radius: 4px;
		-webkit-transition: all .35s;
		-o-transition: all .35s;
		transition: all .35s;
		border-bottom: 0
	}
	.widget:hover {
		-webkit-box-shadow: 2px 2px 8px rgba(0, 0, 0, .2);
		box-shadow: 2px 2px 8px rgba(0, 0, 0, .2)
	}
	.daily-list {
		font-size: 15px;
		color: #666;
		margin-bottom: 10px
	}
	
	.daily-list>p {
		margin-bottom: 7px;
		border-bottom: 1px solid #eee;
		line-height: 27px;
		padding: 0px 15px 10px 15px;
	}
	
	.daily-list>p:last-child {
		padding-left: 15px
	}
	.daily-list ul {
		padding: 2px 15px;
		overflow: hidden;
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
	.widget ul li:nth-child(1) em {
		background: #fd8c84
	}
	
	.widget ul li:nth-child(2) em {
		background: #7fd75a
	}
	
	.widget ul li:nth-child(3) em {
		background: #60c4fd
	}
</style>