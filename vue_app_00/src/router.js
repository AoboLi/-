import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Login from "./components/tabbar/Login.vue"
import GoodList from "./components/home/GoodList.vue"
import Exam02 from "./components/Exam02.vue"
import Exam03 from "./components/Exam03.vue"
import Exam04 from "./components/Exam04.vue"

import Exam05 from "./components/Exam05.vue"
import Exam06 from "./components/Exam06.vue"
import Home from "./components/tabbar/Home.vue"
import jia from "./components/tabbar/jia.vue"
import tal from "./components/tabbar/tal.vue"
import ditu from "./components/tabbar/ditu.vue"
import message from "./components/tabbar/message.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Login',component:Login},
    {path:'/',component:HelloContainer},
    {path:'/GoodList',component:GoodList},
    {path:'/Exam02',component:Exam02},
    {path:'/Exam03',component:Exam03},
    {path:'/Exam04',component:Exam04},
    {path:'/Exam05',component:Exam05},
    {path:'/Exam06',component:Exam06},
    {path:'/Home',component:Home},
    {path:'/jia',component:jia},
    {path:'/tal',component:tal},
    {path:'/ditu',component:ditu},
    {path:'/message',component:message},
  ]
})
