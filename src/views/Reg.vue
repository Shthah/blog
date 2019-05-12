<template>
	<div class="Reg">
		<div id="login">
			<h1>Register</h1>
			<form>
				<input type="text" required="required" placeholder="账号" name="u" id="users" style="box-sizing: content-box" v-model="username">
				<input type="password" required="required" placeholder="密码" name="p" id="passs" style="box-sizing: content-box" v-model="password">
				<!--<input class="but" id="sub" type="button" value="注册"  @click="reg">-->
				<input type="text" placeholder="用户名" v-model="nikename" style="box-sizing: content-box" id="nikename">
				<input class="but" id="submit" type="button" value="注册"  @click="reg">
				<input type="file" id="fli" >
				
				
			</form>
		</div>
		
		<div class="shouye">
			<!--<a href="index.html" style="color:#fff">首页</a-->
			<router-link style="color: #fff" to="/home">首页</router-link>
		</div>
		<div class="login">
			<!--<a href="login.html" style="color:#fff">登陆</a>-->
			<router-link style="color: #fff" to="/login">登陆</router-link>
		
		</div>
		<span id="sitetime" style="color: #28d0e9;opacity: 0;position: fixed"></span>
	</div>
</template>

<script>
	export default {
		name: "Reg",
		data(){
			return {
				username:'',
				password:'',
				nikename:'',
				error:false
			}
		},
		methods:{
			reg(){
				// console.log(document.getElementById('fil').value)
				let formData = new FormData();
				formData.append("username", this.username);
				formData.append("password", this.password);
				formData.append("nikename", this.nikename);
				formData.append("icon", document.getElementById("fli").files[0]);
				
				axios({
					method:'post',
					url:"/api/reg",
					data:formData
				}).then((res)=>{
					
					console.log(res.data)
					if(res.data.error == 0){
						this.$router.push('/login')
					}
				})
			}
		}
	}
</script>

<style scoped>
	.Reg{width: 100%;height: 100%;background-color: #4A374A;}
	*{ margin:0; padding:0; font-family:"Microsoft yahei",serif;}
	li{ list-style-type: none;}
	html{width: 100%;height: 100%;overflow: hidden;}
	body{width: 100%;height: 100%;font-family: 'Open Sans',sans-serif;margin: 0;background-color: #4A374A;}
	#login{position: absolute;top: 50%;left:50%;margin: -150px 0 0 -150px;width: 300px;height: 300px;}
	#login h1{color: #fff;text-shadow:0 0 10px;letter-spacing: 1px;text-align: center;}
	h1{font-size: 2em;margin: 0.67em 0;}
	#users,#passs,#nikename{width: 278px;height: 18px;margin-bottom: 10px;outline: none;padding: 10px;font-size: 13px;color: #fff;text-shadow:1px 1px 1px;border-top: 1px solid #312E3D;border-left: 1px solid #312E3D;border-right: 1px solid #312E3D;border-bottom: 1px solid #56536A;border-radius: 4px;background-color: #2D2D3F;}
	.but{width: 300px;min-height: 20px;display: block;background-color: #4a77d4;border: 1px solid #3762bc;color: #fff;padding: 9px 14px;font-size: 15px;line-height: normal;border-radius: 5px;margin: 0;}
	.shouye{position: fixed;top:60px;left: 70px;}
	.login{position: fixed;top:110px;left: 70px;}
	.btnnone{pointerEvents: none}
	.prompt{width: 400px;height: 200px;background: #fff;text-align: center;font: 24px/2 '';position: fixed;top: 42%;left: 42%}
</style>