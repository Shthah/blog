/**Created by wyq on 2019/5/6*/
//  补零 过滤器

export let fillzero =(n)=>{
	if(n<10 ){
		return '0'+n;
	}else {
		return n;
	}
}
