<!--src/components/tabbar/Login.vue-->
<template>
  <div class="app-login">
    <header class="mui-bar mui-bar-nav" style="background:#4fae38;color:#fff">
      <h1 style="float: left">EYE</h1>  
      <h1 class="mui-title" style="color:#fff;font-size: 20px">眼科医院</h1>
      <div style="float: right">
          <router-link to="/Home">
              <button type="button" class="mui-btn mui-btn-link" style="color:#fff">
                  <span class="mui-icon mui-icon-back"></span>
                  返回
              </button>
          </router-link>
      </div>
    </header>	<br><br>	
    <img src="http://127.0.0.1:3000/img/20.png" height="180px" width="100%;">	<br><br>
    <img src="http://127.0.0.1:3000/img/zxyy.gif" alt="" style="width:90%;margin:10px 5%">
    
    <div style="width: 40px;height: 40px;border-radius: 50%;background: #4fae38;color:#fff;padding: 10px;float: left;margin-left:25% ;">预</div>
    <div style="width: 40px;height: 40px;border-radius: 50%;background: #4fae38;color:#fff;padding: 10px;float: left;">约</div>
    <div style="width: 40px;height: 40px;border-radius: 50%;background: #4fae38;color:#fff;padding: 10px;float: left">挂</div>
    <div style="width: 40px;height: 40px;border-radius: 50%;background: #4fae38;color:#fff;padding: 10px;float: left">号</div><br><br><br>
     <form action="#">
        <p style="padding:0px 40px;clear: both;">
          <b> 预约科室:</b>
          <select name="orderitemid" id="orderitemid" style="width: 60%;height:36px ;">
          <option value="1">-请选择-</option>
          <option value="2">白内障科</option>
          <option value="3">眼底病科</option>
          <option value="4">青光眼科</option>
          <option value="5">小儿眼病</option>
          <option value="6">斜弱视科</option>
          <option value="7">验光配镜</option>
          <option value="8">角膜眼表</option>
          <option value="9">泪道专科</option>
          <option value="10">眼整形科</option>
          <option value="11">近视手术</option>
          </select>
        </p>
       <p style="padding:0px 40px;clear: both;">
          <b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姓名:</b>
          <input type="text" v-model="name" style="width: 60%;height:30px ;" name="username"/><b style="color:#4fae38">※必填</b>
      </p>
       <p style="padding:0px 40px">
          <b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话:</b>
          <input type="text"  v-model="pwd" style="width: 60%;height:30px ;" id="tel" name="tel"/><b style="color:#4fae38" >※必填</b>
       </p>
       <p style="padding:0px 40px">
          <b>预约时间:</b>
          <input type="date" style="width: 60%;height:30px ;">
       </p>
       <p style="padding:0px 40px">
        <b>验证码：</b>
        <input type="text" id="input" style="width:50%;height:30px ;">
        <input type="button" id="code" onclick="createCode()" style="width: 90px;height: 30px;" value="获取验证码">
        <input type="button" value="验证" onclick="validate()" style="height: 30px;float: right">
       </p>
       <input type="button" id="btn" form="f1" value="提交" @click="btnLogin" style="margin:0 35%;padding:6px 26px;
       background:#9fd442;color:#fff "/>
     </form>
     <p style="margin:20px 10px">预约须知：<br>1、网络预约优先就诊，节省排队时间；<br>2、预约成功后客服人员将与您联系，确认就诊详情。</p>
     <div>
        <img src="http://127.0.0.1:3000/img/3.jpg" alt="" style="height: 180px;width: 100%;">
        <div style="position: absolute;z-index: 1000;top:810px;font:500 16px '黑体';color:#fff">
            <br>  
            <br><br><br>
            门诊时间:8:30-18:30
            <br>
            电话:00300300&nbsp;&nbsp;&nbsp;5454545555
            <br>
            地址:河南省郑州市西四环
        </div>
    
</div>   
  </div>
</template>
<script>
  //0:在export  之前引入需要组件
  import {Toast} from "mint-ui"
  export default {
    data(){
      return {
        name:"",  //双向绑定用户名
        pwd:"", //双向绑定密码
      }
    },
    methods:{
      btnLogin(){
       //功能:获取用户输入用户名和密码
       //验证如果通过发送ajax请求给服务器
       //程序并且获得返回结果 13
       console.log(1);
       //1:获取用户输入用户名和密码
       var u = this.name;
       var p = this.pwd;
       console.log("2:"+u+":"+p);
       //2:创建正则表达式 
       //   用户名 字母数字下划线 3~8
       var ureg = /^\D{1,8}$/;
       //   密码   数字          3~8
       if(!ureg.test(u)){
        //3:验证用户名如果失败 提示错误信息
        //console.log("3:验证失败");
        Toast("姓名不存在，请检查");
        return;
       }
     
       //4:验证密码如果失败   提示错误信息
       var preg = /^[1][3-9][0-9]{9}$/;
       if(!preg.test(p)){
        Toast("电话格式不正确");
        return;
       }
       
       //5:发送ajax请求 axios
       //在main.js 引入库
       //脚手架 8080   --> app.js 3000
      //  var url = "http://127.0.0.1:3000";
      //  url+="/login?name="+u+"&pwd="+p;
      //  this.axios.get(url).then(result=>{
      //    //console.log(result.data.code);
      //    //console.log("服务器返回结果");
      //    //6:获取返回结果
      //    //7:提示 登录成功或者用户名或密码有误
      //    if(result.data.code==1){
      //      Toast("登录成功")
      //    }else{
      //      Toast("用户名或密码有误");
      //    }
      //  })
      var url = "http://127.0.0.1:3000/reg"
      url+="?username="+u+"&tel="+p;
      this.axios.get(url).then(res=>{
        if(res.data.code==1){
          Toast(u+"预约成功,请准时前来就诊");
          
        }
      })
				
      }
  
       	
		  }	
  }

 
  </script>
<style>
 
</style>

