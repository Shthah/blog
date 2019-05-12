<template>
	<div id="continar" class="continar" style="margin-top: 20px;">
		<Mainright></Mainright>
		<Homeleft v-if="mainbl" ></Homeleft>
		<Mainleft v-if="!mainbl"></Mainleft>
	</div>
</template>

<script>
	import Mainright from './Mainright.vue'
	import Homeleft from './Homeleft.vue'
	import Mainleft from '../Mainleft.vue'
	
	import {mapGetters} from 'vuex'
	export default {
		name: "Continar",
		components:{
			Mainright,Homeleft,Mainleft
		},
		watch:{
			$route: {
				handler: function (route) {
					let path = route.path;
					this.checkPath(path)
				},
				immediate:true
			}
		},
		computed:mapGetters(['mainbl']),
		methods:{
			checkPath(path){
				if(/home|lists/.test(path)){
					// console.log(this.$store)
					this.$store.dispatch('UPDATE_MAIN',true)
					this.$store.dispatch('UPDATE_LISTS')
					
				}
				if(/details/.test(path)){
					// console.log(this.$store)
					this.$store.dispatch('UPDATE_MAIN',false)
				}
			}
		}
		
	}
</script>

<style scoped>
	.continar {
		width: 1200px;
		min-height: 500px;
		margin: 128px auto 50px;
		overflow: hidden
	}
</style>