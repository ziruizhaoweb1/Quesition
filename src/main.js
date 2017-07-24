import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import first from './views/first.vue'
import second from './views/second.vue'
import third from './views/third.vue'
import fouth from './views/fouth.vue'
import reset from './css/reset.css'
import axios from 'axios'
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.prototype.$http=axios;
const routes = [
	{
		path:"/",
		redirect:{
			name:"first"
		}
	},
  	{
	    name:'first',
	    path:'/first',
	    component:first
  	},
  	{
	    name:'second',
	    path:'/second',
	    component:second
  	},
  	{
	    name:'third',
	    path:'/third',
	    component:third
  	},
  	{
	    name:'fouth',
	    path:'/fouth',
	    component:fouth
  	}
]

let router=new VueRouter({
  routes
})
let store=new Vuex.Store({
	state:{
		data:[],
		schoolname:""
	}
})
new Vue({
  el: '#app',
      router,
      store,
  render: h => h(App),
  mounted(){
  	console.log(axios)
  	console.log(this.$http)
  	this.$http.get("../static/data.json").then((data)=>{
  		store.state.data=data;
  	})
  }
})
