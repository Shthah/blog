import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//
// import Details from "@/views/Details"
const Details =()=>import("@/views/Details.vue")
import Home from "@/views/Home"
import Login from "@/views/Login"
import Reg from "@/views/Reg"
import Error from "@/views/Error"
import Lists from "@/views/Lists"
import User from "@/views/User"


var routes = [
	{path:'/home',component:Home},
	// {path:'/details',component:Details},
	{name:'details',path:'/details/:id',component:Details},
	{path:'/lists',component:Lists},
	{path:'/login',component:Login},
	{path:'/reg',component:Reg},
	{path:'/user',component:User},
	{path:'/',component:Home,name: 'home',redirect:'/home'},
	{path:'*',component:Error}
];

var router  = new Router({
	mode: 'history',
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

export default router

//router  实例  routes  数组（路由的配置）


// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
