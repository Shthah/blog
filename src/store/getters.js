/**Created by wyq on 2019/5/8*/

// 获取到数据，然后映射到 mapGetters 中，然后可在组件中直接引入

let getters={
	mainbl:(state)=>state.mainbl,
	bLoading:(state)=>state.bLoading,
	ipnew:(state)=>state.ipnew,
	user:(state)=>state.user,
	home:(state)=>state.home,
	lists:(state)=>state.lists,
	listone:(state)=>state.listone,
	detail:(state)=>state.details,
	constructiontime:(state)=>state.constructiontime,
};


export default getters;

