<template>
	<div class="echarts">
		<h3 class="widget-title">
			<a href=""><i class="fa fa-bars" aria-hidden="true"></i>Echarts图表</a>
		</h3>
		<div id="echarts" style="height: 300px">
		
		</div>
	</div>
</template>

<script>
	// import echarts  from 'echarts'
	import echarts  from 'echarts/lib/echarts'
	import "echarts/lib/chart/bar"
	import "echarts/lib/component/tooltip"
	import "echarts/lib/component/title"
	
	
	export default {
		name: "Eharset",
		mounted() {
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('echarts'));
			// var myChart = echarts.init(this.$refs.echarts);
			
			//准备图表数据
			let opts = {
				backgroundColor: "#2c343c",
				
				title: {
					text: "Customized Pie",
					left: "center",
					top: 20,
					textStyle: {
						color: "#ccc"
					}
				},
				
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				
				visualMap: {
					show: false,
					min: 80,
					max: 600,
					inRange: {
						colorLightness: [0, 1]
					}
				},
				series: [
					{
						name: "访问来源",
						type: "pie",
						radius: "55%",
						center: ["50%", "50%"],
						data: [
							{ value: 335, name: "直接访问" },
							{ value: 310, name: "邮件营销" },
							{ value: 274, name: "联盟广告" },
							{ value: 235, name: "视频广告" },
							{ value: 400, name: "搜索引擎" }
						].sort(function(a, b) {
							return a.value - b.value;
						}),
						roseType: "radius",
						label: {
							normal: {
								textStyle: {
									color: "rgba(255, 255, 255, 0.3)"
								}
							}
						},
						labelLine: {
							normal: {
								lineStyle: {
									color: "rgba(255, 255, 255, 0.3)"
								},
								smooth: 0.2,
								length: 10,
								length2: 20
							}
						},
						itemStyle: {
							normal: {
								color: "#c23531",
								shadowBlur: 200,
								shadowColor: "rgba(0, 0, 0, 0.5)"
							}
						},
						
						animationType: "scale",
						animationEasing: "elasticOut",
						animationDelay: function(idx) {
							return Math.random() * 200;
						}
					}
				]
			};
			
			// 绘制图表
			// myChart.setOption(配置);
			myChart.setOption(opts);
		}
	}
</script>

<style scoped>
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
</style>