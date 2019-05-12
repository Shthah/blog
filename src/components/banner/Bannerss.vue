<template>
	<el-carousel :interval="5000" arrow="always" trigger="click">
		<el-carousel-item v-for="item in lists" :key="item">
				<img :src=" item " alt="">
		</el-carousel-item>
	</el-carousel>
</template>

<script>
	export default {
		name: "Banner",
		data(){
			return {
				lists:['./img/banner-1.jpg','./img/banner-2.jpg','./img/banner-3.jpg','./img/banner-4.jpg','./img/banner-5.jpg','./img/banner-6.jpg']
			}
		},
	}
</script>

<style scoped>
	.el-carousel{margin-top: 0px;}
	.el-carousel__item{
		text-align: center;
	}
</style>