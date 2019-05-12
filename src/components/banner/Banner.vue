<template>
	<swipe
			class="my-swipe"
			:speed="1500"
			:auto="3000"
	>
		<swipe-item v-for="item of lists" :key="item.index" class="slide1">
			<img :src="item" alt="">
		</swipe-item>
	</swipe>
</template>

<script>
	import { Swipe, SwipeItem } from 'vue-swipe';
	import 'vue-swipe/dist/vue-swipe.css';
	import 'vue-swipe/dist/vue-swipe.js';
	// import Swiper from '../../assets/js/vue-swipe'
	export default {
		name: "Banners",
		data(){
			return {
				lists:['./img/banner-1.jpg','./img/banner-2.jpg','./img/banner-3.jpg','./img/banner-4.jpg','./img/banner-5.jpg','./img/banner-6.jpg']
			}
		},
		components: {
			Swipe,SwipeItem
		}
	}
</script>

<style scoped>
	.el-carousel{margin-top: 0px;}
	.el-carousel__item{
		text-align: center;
	}
</style>