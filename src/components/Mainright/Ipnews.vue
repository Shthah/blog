<template>
	<div class="widget">
		<img src="https://apa.me/news/" />
	</div>
</template>

<script>
	export default {
		name: "Ipnews"
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
	.widget img{
		width: 100%;
		height: 270px;
	}
</style>