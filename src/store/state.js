/**Created by wyq on 2019/5/8*/
//数据初始化，或者说组件中需要的数据

let state = {
	
	mainbl:false,
	bLoading:false,
	ipnew:false,
	user:{
		"error":1
	},
	home:[],
	lists:[],
	
	banner:[],
	details:{},   //详情页数据
	listone:{},      //详情页的list数据
	
	constructiontime:'',  //建站时间
	
}

export default state