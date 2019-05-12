/**Created by wyq on 2019/5/8*/

// 处理 commit 的请求，使数据或者状态的变化

let mutations={
	UPDATE_MAIN:(state,payload)=>{
		// console.log(22)
		state.mainbl=payload
	},
	UPDATE_IPNEW:(state,payload)=>{
		state.ipnew=payload
	},
	
	UPDATE_BLOADING:(state,payload)=>{
		state.bLoading=payload
	},
	
	UPDATE_USER:(state,payload)=>{
		state.user=payload
	},
	
	
	UPDATE_HOME:(state,payload)=>state.home=payload,
	UPDATE_LISTS:(state,payload)=>state.lists=payload,
	UPDATE_LIST:(state,payload)=>state.listone=payload,
	UPDATE_DETAIL:(state,payload)=>state.details=payload,
	UPDATE_TIME:(state,payload)=>state.constructiontime=payload,
	
};

export default mutations;