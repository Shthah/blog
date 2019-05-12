<template>
  <div class="home">
	  <!--<el-container class="is-vertical">-->
		  <Heads></Heads>
	      <Banner></Banner>
	      <Continar></Continar>
		  <Foots></Foots>
	  <!--</el-container>-->
  </div>
</template>

<script>
// @ is an alias to /src
import Heads from '../components/header/Heads.vue';
import Foots from '../components/footer/Foots.vue';
import Banner from '../components/banner/Banners.vue';
import Continar from '../components/main/Continar.vue';


export default {
  name: 'home',
  components: {
	  Heads,Foots,Banner,Continar
  }
}
</script>
<style>
	.my-swipe {
		height: 300px;
		color: #fff;
		font-size: 50px;
		text-align: center;
	}

	
</style>