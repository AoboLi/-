<template>
<div class="app-Exam05">                
   <header class="mui-bar mui-bar-nav" style="background:#4fae38;color:#fff;">
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
   </header><br><br>
   <img src="http://127.0.0.1:3000/img/topimg.png"  style="height: 180px;width: 100%;">
   <h2 style="width:100%;color: #1DAD4E;text-align: center" >1、什么是青光眼</h2>
   <p style="margin: 20px">青光眼是一种特殊的视神经疾病，多数患者的眼内压间断或持续升高，持续的高眼压会给视功能带来损害，如不及时治疗，视野会逐渐丧失并不可逆转，最终导致失明。</p>
   <img src="http://127.0.0.1:3000/img/what.jpg"  style="width: 100%;">
   <div style="width: 80%;margin:30px;border:1px dashed #000000;border-radius: 3%">
        <h3 style="width:20%;float: left;color:rgb(31, 172, 78);border-right:1px dashed #1fac4e">专家提醒</h3>
        <span>青光眼患者不分年龄段分先天性和后天性，老中青少都可受青光眼的“青”睐。</span>
   </div>
   <img src="http://127.0.0.1:3000/img/nld.jpg"style="width:100%;">
   <ul class="qingguang">
        <li>家里有直系亲属患有青光眼的人群；</li>
        <li>患有近视的人群；</li>
        <li>长期应用糖皮质激素类药物的人群；</li>
        <li>精神因素也是引起青光眼的一大原因。因此，平时生活压力大、饮食作息无规律、容易发脾气、日常情绪波动较大的人该注意。</li>
   </ul>
   <ul style="list-style: none">
        <li>
             <img src="http://127.0.0.1:3000/img/bgimg1.png" style="vertical-align:middle;height: 80px;margin-right:15px"><span>家族有青光眼遗传病史；</span>
        </li><br>
        <li>
             <img src="http://127.0.0.1:3000/img/bgimg2.png" style="vertical-align:middle;height: 80px;margin-right:15px"><span>家族有青光眼遗传病史；</span>
        </li><br>
        <li>
             <img src="http://127.0.0.1:3000/img/bgimg3.png" style="vertical-align:middle;height: 80px;margin-right:15px"><span>家族有青光眼遗传病史；</span>
        </li><br>
        <li>
             <img src="http://127.0.0.1:3000/img/bgimg4.png" style="vertical-align:middle;height: 80px;margin-right:15px"><span>家族有青光眼遗传病史；</span>
        </li> <br> 
        <li>
             <img src="http://127.0.0.1:3000/img/bgimg5.png" style="vertical-align:middle;height: 80px;margin-right:15px"><span>家族有青光眼遗传病史；</span>
        </li>      
   </ul>
   <div style="background: #bee3fd;height: 160px">
        <img src="http://127.0.0.1:3000/img/7.jpg" width="30%" style="float:left;margin:5px 10px">
        <br><h4>陈学国</h4>
        <span>眼科博士后<br>河南省眼科专业委员会委员 <br>河南省医学会医疗事故技术鉴定专家</span>
        <button type="button" class="mui-btn mui-btn-success" style="top:75%;left:2%"><router-link to="/tal" style="color:#fff">
          点击在线咨询
     </router-link>
                </button>
        <button type="button" class="mui-btn mui-btn-danger" style="top:80%;left:3%"><router-link to="/Login" style="color:#fff">
          点击预约手术 
     </router-link>
        </button>
   </div><br>
   <div style="background: #bee3fd;height: 160px">
        <img src="http://127.0.0.1:3000/img/12.jpg" width="30%" style="float:left;margin:5px 10px">
        <br><h4>陈鹏</h4>
        <span>郑州市眼科研究所所长 <br> 国际白内障医学委员会主任委员</span>
        <button type="button" class="mui-btn mui-btn-success" style="top:75%;left:2%"><router-link to="/tal" style="color:#fff">
          点击在线咨询
     </router-link></button>
        <button type="button" class="mui-btn mui-btn-danger" style="top:80%;left:3%"><router-link to="/Login" style="color:#fff">
          点击预约手术 
     </router-link>
        </button>
   </div><br>
   <div>
      <img src="http://127.0.0.1:3000/img/3.jpg" alt="" style="height: 180px;width: 100%;">
      <div style="position: absolute;z-index: 1000;top:1940px;font:500 16px '黑体';color:#fff">
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
     
export default {
        data() {
        return {
                
        }
        },
}
</script>
<style>
 .qingguang>li{
        margin-bottom:10px;
        font: 100 14px ""; 
 }
</style>
