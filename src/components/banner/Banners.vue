<template>
	<swiper :options="swiperOption" class="sda">
		<swiper-slide class="we" v-for="item of banners" :key="item.key">
			<img :src=" item " alt="">
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	　　 <div class="swiper-button-prev" slot="button-prev"></div>
	　　 <div class="swiper-button-next" slot="button-next"></div>
	</swiper>
</template>

<script>
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'
	export default {
		name: '',
		data() {
			return {
				swiperOption: {
					pagination:{
						el:".swiper-pagination",
						clickable:true,
						dynamicMainBullets: 3
					},
					
					autoplay:true,
					effect : 'cube',
					navigation:{
						nextEl:".swiper-button-next",
						prevEl:".swiper-button-prev"
					},
					autoplay:3000
				},
				banners:['./img/banner-1.jpg','./img/banner-2.jpg','./img/banner-3.jpg','./img/banner-4.jpg','./img/banner-5.jpg','./img/banner-6.jpg']
			}
		},
		components: {
			VueAwesomeSwiper,swiper,swiperSlide
		}
	}
</script>

<style scoped>
	.sda{
		height: 300px;
		width: 1200px;
	}
	.we{
		/*width: 1200px;*/
	}
	.swiper-button-disabled{
		display:none;
	}
</style>