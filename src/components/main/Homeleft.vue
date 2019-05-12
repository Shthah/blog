<template>
	<div class="continar-left" id="continar-left" style="border:0; padding:0;background: skyblue;">
		
		<div class="text" v-for="item of lists" :key="item.id">
			<div class="img-left">
				<!--<router-link :to="{name:'details',params:{id:item.index},query:{dataName:dateName}}" class="read-more">-->
				<router-link :to=" './details/'+ item._id " class="read-more">
					<img :src=item.images>
				</router-link>
				<!--<a class="read-more">-->
					<!--<img :src=item.images>-->
					<!--&lt;!&ndash;<img src="@/assets/img/m11.jpg">&ndash;&gt;-->
				<!--</a>-->
			</div>
			<div class="text_right">
				<h2>
					<span>
						<ul class="post-categories">
							<li><a>{{item.mark}}</a>
							</li>
						</ul>
						<i></i>
					</span>
					<router-link to="/details">{{item.tit}}</router-link>
					<!--<a href="">{{item.tit}}</a>-->
				</h2>
				<div class="entry-meta">
					<a>{{item.user}}</a>
					<i class="space">•</i>
					<a>{{item.category}}</a>
				</div>
				<h3>{{item.cont}}</h3>
				<router-link class="read-more" to="/details">
					阅读全文
					<i class="fa fa-chevron-circle-right"></i>
				</router-link>
				<!--<a class="read-more" href="">-->
					<!--阅读全文-->
					<!--<i class="fa fa-chevron-circle-right"></i>-->
				<!--</a>-->
				<p class="l">
					<span>
						<i class="fa fa-calendar"></i>
						&nbsp;{{item.time | date }}
					</span>
					<span class="r"></span>
				</p>
			</div>
		</div>
		
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		name: "Homeleft",
		computed:mapGetters(['lists']),
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
				if(/home|list/.test(path)){
					this.$store.dispatch("UPDATE_LISTS")
					
				}
			}
		}
	}
</script>

<style scoped>
	.continar .continar-left {
		width: 820px;
		float: left;
	}
	
	.continar .continar-left-top {
		width: 100%;
		height: 120px;
		
		box-shadow: 0 1px 2px #c5c5c5;
		border: 1px solid #eaeaea;
		padding: 15px 20px;
		overflow: hidden;
		background-color: #fff;
		margin-bottom: 15px;
		border-radius: 4px;
		
		
		transition: all .35s;
		border-bottom: 0
	}
	
	.continar .continar-left-top h1 {
		font-size: 18px;
		line-height: 24px;
		margin-top: 0;
		margin: 0 0 15px;
		
		
		transition: all .35s;
		
	}
	
	.continar .continar-left-top h1 a {
		font-size: 18px;
		color: #FF5E52;
	}
	
	.continar .continar-left-top h1 a:hover {
		color: #19ACF7
	}
	
	.continar .continar-left-top h1 a img {
		max-width: 100%;
		width: auto\9;
		height: auto;
		vertical-align: middle;
		border: 0
	}
	
	.continar .continar-left-top h1 span {
		margin-left: -8px;
		color: #FF5E52;
		transition: all .25s;
		font-size: 20px
	}
	
	.continar .continar-left-top p {
		color: #666;
		line-height: 25px;
		margin: 0;
		text-indent: 2em;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		-moz-line-clamp: 2;
		box-orient: vertical;
		overflow: hidden;
		width: 100%
	}
	
	.continar .continar-left-top>span {
		display: block;
		text-indent: 2em;
		height: 50px;
		overflow: hidden;
		margin-bottom: 20px;
		line-height: 25px;
		color: #666;
		font-size: 14px
	}
	
	.continar .inner-box {
		background: #fff;
		padding: 15px 15px 10px 15px;
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
	
	.continar .inner-box:hover {
		-webkit-box-shadow: 2px 2px 8px rgba(0, 0, 0, .2);
		box-shadow: 2px 2px 8px rgba(0, 0, 0, .2);
		border-color: #d6d6d6
	}
	
	.continar .rssbook {
		text-align: center
	}
	
	.continar .rssbook p {
		color: #777;
		font-size: 12px;
		vertical-align: top;
	}
	
	.continar .rssbook>p {
		margin-top: 16px;
	}
	
	.continar p.wpm_thankyou {
		color: #ed145b
	}
	
	.rssbook h3 {
		font-size: 16px;
		margin-bottom: 3px;
	}
	
	.rssbook p {
		font-size: 12px;
		margin: 5px auto 10px;
		line-height: 24px
	}
	
	.rssbook form {
		margin: 10px auto;
		display: block
	}
	
	.wpm_form .wpm_email,
	.wpm_form .wpm_submit {
		display: inline-block;
	}
	
	.wpm_form .wpm_email input {
		width: 215px;
		padding: 10px;
		border-radius: 3px 0 0 3px;
		background: #fff;
		border: 1px solid #1ED0E1;
		outline: none;
		height: 38px;
	}
	
	.wpm_form .wpm_submit input {
		background: #1ed0e1;
		color: #fff;
		padding: 9px 15px 10px;
		border: none;
		border-radius: 0 3px 3px 0;
		cursor: pointer;
		height: 38px;
	}
	
	.continar-left>.text {
		background: #fff;
		height: 195px;
		padding: 15px;
		position: relative;
		border: 1px solid #eaeaea;
		-webkit-transition: all .35s;
		-o-transition: all .35s;
		transition: all .35s;
		/*border-bottom: 1px solid transparent;*/
		-webkit-transition: all .2s linear;
		-o-transition: all .2s linear;
		transition: all .2s linear;
		-webkit-transform: translate3d(0, 0px, 0);
		transform: translate3d(0, 0px, 0);
	}
	
	.continar-left>.text:nth-last-of-type(2) {
		border: 1px solid #eaeaea;
	}
	
	.continar-left>.text:hover,
	.continar-left>.text:nth-last-of-type(2):hover {
		border: 1px solid #45BCF9;
		background: #f8fefd;
		-webkit-transform: translate3d(0, 0px, 0);
		transform: translate3d(0, 0px, 0);
	}
	
	.text .new-icon {
		display: none;
	}
	.img-left {
		width: 220px;
		height: 150px;
		border: 0;
		float: left;
		margin-top: 6px;
		position: relative;
		overflow: hidden;
	}
	
	.text img {
		width: 220px;
		height: 150px;
		border: 0;
		float: left;
		max-width: 100%;
		transition-duration: .5s;
		border-radius: 2px;
	}
	
	.text .img-left img:hover {
		transform: scale(1.02);
	}
	
	.text .text_right {
		float: right;
		width: calc(100% - 245px)
	}
	
	.text_right h2 span:nth-child(1) {
		color: #fff;
		background-color: #45BCF9;
		padding: 1px 6px 2px;
		font-size: 12px;
		display: inline-block;
		position: relative;
		top: -2px;
		margin-right: 6px
	}
	
	.text_right h2 span:nth-child(1) i {
		position: absolute;
		top: 50%;
		margin-top: -4px;
		right: -4px;
		display: inline-block;
		width: 0;
		height: 0;
		vertical-align: middle;
		border-left: 4px solid #45BCF9;
		border-top: 4px solid transparent;
		border-bottom: 4px solid transparent
	}
	
	.text_right h2 span:nth-child(1) a {
		color: #fff;
		font-size: 12px;
	}
	
	.text h2 {
		margin-bottom: 10px;
		padding-top: 6px;
		width: 500px;
		overflow: hidden;
		white-space: nowrap;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
	}
	
	.text h2 a {
		font: lighter 18px Menlo, PingFangSC-Regular, Microsoft Yahe;
		-webkit-transition: all .35s;
		-o-transition: all .35s;
		transition: all .35s;
		font-weight: lighter;
	}
	
	.text h2 a:hover {
		color: #45BCE6
	}
	
	.text em {
		position: absolute;
		right: 15px;
		top: 20px;
		font-style: normal;
		-webkit-transition: all .35s;
		-o-transition: all .35s;
		transition: all .35s;
		background: #EA4C89;
		color: #fff;
		opacity: .8;
		display: block;
		border-radius: 2px;
	}
	
	.text em a {
		display: block;
		height: 100%;
		text-align: center;
		color: #fff;
		padding: 2px 12px
	}
	
	.text em:hover a {
		background: #5e5e5e;
		transition: all .35s
	}
	
	.text em:hover:after {
		border-left: 8px solid #5e5e5e;
		transition: all .35s
	}
	
	.text em:after {
		content: "";
		position: absolute;
		z-index: -1;
		left: 50%;
		margin-left: -2px;
		top: 12px;
		border: 8px dashed transparent;
		border-left: 8px solid #EA4C89;
		border-right-width: 0
	}
	
	.entry-meta {
		margin-bottom: 10px;
		font-size: 12px;
		overflow: hidden
	}
	
	.entry-meta a {
		color: #ff5931;
		opacity: .8;
		font-size: 12px
	}
	
	.entry-meta a:nth-of-type(2) {
		color: #1abc9c
	}
	
	.entry-meta .space,
	.sep,
	.space {
		padding: 0 10px;
		color: #a5a5a5;
		font-style: normal
	}
	
	.text h3 {
		line-height: 26px;
		height: 49px;
		margin-bottom: 16px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		-moz-line-clamp: 2;
		box-orient: vertical;
		overflow: hidden;
		width: 100%
	}
	
	.read-more {
		color: #777;
		transition: all .25s;
		text-align: center;
		padding: 0 12px;
		line-height: 30px;
		font-size: 12px;
		position: absolute;
		bottom: -9px;
		right: 0px;
		font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
	}
	
	.img-left .read-more {
		height: 150px;
		padding: 0;
		top: 0;
		bottom: auto;
	}
	
	.read-more i {
		font-size: 12px;
		color: #333;
		padding-left: 5px;
	}
	
	.read-more:hover {
		color: #333;
	}
</style>