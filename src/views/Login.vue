<template>
	<div class="Login">
		<div id="login">
			<h1>Login</h1>
			<form method="post">
				<input type="text" required="required" placeholder="用户名" name="u" id="users" style="box-sizing: content-box" v-model="username">
				<input type="password" required="required" placeholder="密码" name="p" id="passs" style="box-sizing: content-box" v-model="password">
				<input class="but" id="btn" type="button" value="登录" @click="login">
			</form>
		</div>
		
		<div class="shouye">
			<!--<a href="index.html" style="color:#fff">首页</a>-->
			<!--<router-link style="display: inline;" to="/reg">免费注册</router-link>-->
			<router-link style="color: #fff" to="/home">首页</router-link>
		</div>
		<div class="zhuce">
			<router-link style="color: #fff" to="/reg">注册</router-link>
			<!--<a href="reg.html" style="color:#fff">注册</a>-->
		</div>
		<div class="zhuces">
			<router-link style="color: #fff" to="/user">User</router-link>
			<!--<a href="reg.html" style="color:#fff">注册</a>-->
		</div>
		<span id="sitetime" style="color: #28d0e9;opacity: 0;position: fixed"></span>
	</div>
</template>

<script>
	
	export default {
		name: "Login",
		data(){
			return {
				username:'',
				password:'',
				error:false
			}
		},
		methods:{
			login(){
				// console.log(888)
				this.$store.dispatch('UPDATE_USER',{username:this.username,password:this.password}).then((data)=>{
					console.log(data)
					if(data.error==0){
						// console.log('true')
						// console.log(data)
						localStorage.setItem('vue_user',JSON.stringify(data));
						this.$router.push('/user')
					}else{
						console.log('账号密码错误')
						// console.log(data)
						// this.error = true
					}
				})
			}
		}
	}
</script>

<style scoped>
	.Login{width: 100%;height: 100%;background-color: #4A374A;}
	html{width: 100%;height: 100%;overflow: hidden;}
	body{width: 100%;height: 100%;font-family: 'Open Sans',sans-serif;margin: 0;background-color: #4A374A;}
	#login{position: absolute;top: 50%;left:50%;margin: -150px 0 0 -150px;width: 300px;height: 300px;}
	#login h1{color: #fff;text-shadow:0 0 10px;letter-spacing: 1px;text-align: center;}
	h1{font-size: 2em;margin: 0.67em 0;}
	#users,#passs{width: 278px;height: 18px;margin-bottom: 10px;outline: none;padding: 10px;font-size: 13px;color: #fff;text-shadow:1px 1px 1px;border-top: 1px solid #312E3D;border-left: 1px solid #312E3D;border-right: 1px solid #312E3D;border-bottom: 1px solid #56536A;border-radius: 4px;background-color: #2D2D3F;}
	.but{width: 300px;min-height: 20px;display: block;background-color: #4a77d4;border: 1px solid #3762bc;color: #fff;padding: 9px 14px;font-size: 15px;line-height: normal;border-radius: 5px;margin: 0;}
	.shouye{position: fixed;top:60px;left: 70px;}
	.zhuce{position: fixed;top:110px;left: 70px;}
	.zhuces{position: fixed;top:140px;left: 70px;}
</style>