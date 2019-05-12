<template>
	<div class="list">
		<Heads></Heads>
		<Continar></Continar>
		<Foots></Foots>
	</div>
</template>

<script>
import Heads from '../components/header/Heads.vue';
import Foots from '../components/footer/Foots.vue';
import Continar from '../components/main/Continar.vue';

export default{
	name: "Lists",
	components: {
		Heads,Foots,Continar
	}
}
</script>

<style scoped>

</style>