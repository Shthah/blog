<template>
	<div class="colorful_loading" style="display: block;">
		<div class="colorful_loading_frame" style="display: block;">
			<div class="block"></div>
			<div class="block"></div>
			<div class="block"></div>
			<div class="block"></div>
			<div class="section-left"></div>
			<div class="section-right"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Loading"
	}
</script>

<style scoped>
	/*.colorful_loading,.colorful_loading_frame{display:none}*/
	.colorful_loading,.colorful_loading_frame{display:block}
	.colorful_loading{height:100%;width:100%;position:fixed;top:0;left:0;z-index:9999;background-color:rgba(20,20,20,.4)}
	.colorful_loading_frame{display:block;position:relative;left:50%;top:50%;width:150px;height:150px;margin:-75px 0 0 -75px;border-radius:50%;border:3px solid transparent;border-top-color:#3498db;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;z-index:1001}
	.colorful_loading .block:nth-child(1){content:"";position:absolute;top:5px;left:5px;right:5px;bottom:5px;border-radius:50%;border:3px solid transparent;border-top-color:#e74c3c;-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}
	.colorful_loading .block:nth-child(2){content:"";position:absolute;top:15px;left:15px;right:15px;bottom:15px;border-radius:50%;border:3px solid transparent;border-top-color:#f9c922;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}
	.colorful_loading .block:nth-child(3){-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:all .7s .3s cubic-bezier(.645,.045,.355,1);transition:all .7s .3s cubic-bezier(.645,.045,.355,1)}
	.colorful_loading .block:nth-child(4){-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);-webkit-transition:all .7s .3s cubic-bezier(.645,.045,.355,1);transition:all .7s .3s cubic-bezier(.645,.045,.355,1)}
	@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}
		100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}
	}
	@keyframes spin{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}
		100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}
	}
</style>