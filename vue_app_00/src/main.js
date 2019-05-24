import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'
Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//按需加载mint-ui组件库中一个组件Header
//1:按需引入Header，Button以及轮播图组件
/*import {Header,Button,Swipe,SwipeItem,Lazyload} from "mint-ui"

//2:全局注册Header
//希望Header组件可以像标签直接调用
//标签:Header.name="mt-header"
//在项目中任意组件模板都可以直接使用
Vue.component(Header.name,Header);
Vue.component("mt-button",Button);
//注册轮播图组件
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.use(Lazyload);*/
import MintUI from "mint-ui";

Vue.use(MintUI)
//3:引入axios库 main.js
//3.1:引入axios库
import axios from "axios"
//3.2:配置跨域访问保存session中数据
axios.defaults.withCredentials=true
//3.3:将axios配置为Vue实例属性
Vue.prototype.axios = axios
// 4创建一个日期格式的过滤器
// 4.1创建过滤器,
Vue.filter("datetimeFilter",function(val){
  // (1)创建新的日期对象保存原有的日期
  var now=new Date(val);
  var y=now.getFullYear();
  var m=now.getMonth()+1;
  var d=now.getDate();

  // (2)创建三个变量保存年月日
  // 3创建三个变量保存时分秒
  var h=now.getHours();
  var mi=now.getMinutes();
  var s=now.getSeconds();
  // 调整月份日期格式
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  // 返回拼接字符串
  return `${y}-${m}-${d} ${h}:${mi}:${s}`;
})
// 在组件使用

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
