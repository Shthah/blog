<template>
	<div class="details">
		<!--<el-container class="is-vertical">-->
		<Heads></Heads>
		<Continar></Continar>
		<Foots></Foots>
		<!--</el-container>-->
	</div>
</template>

<script>
	import Heads from '@/components/header/Heads.vue';
	import Foots from '@/components/footer/Foots.vue';
	import Continar from '@/components/main/Continar.vue';
	// import Mainleft from '../components/Mainleft.vue';
	export default {
		name: "Details",
		components:{
			Heads,Foots,Continar
		},
		mounted(){
			// this.$store.dispatch("UPDATE_DETAIL")
		}
	}
</script>

<style scoped>

</style>