<template>
    <div class="app-Exam03">
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
        </header><br><br>
        <img src="http://127.0.0.1:3000/img/topimg.jpg"  style="height: 180px;width: 100%;">	
        <h3 class="a3">1.眼干症仁和眼科特色干眼治疗室</h3>	
        <h5>&nbsp;&nbsp;&nbsp;<a href="javascript:;">干眼症自测:</a><span>如果你有以下症状,极有可能患上了干眼症</span></h5>
        <div class="yanjiao">
                <h4>①</h4>
                <span>眼睛干涩 <br>畏光畏风 <br>发红发痒</span>
        </div>
        <div class="yanjiao" style="background: #dec13f">
            <h4>②</h4>
            <span>视觉模糊 <br>有异地物感 <br>不明流泪</span>
        </div>
        <div class="yanjiao" style="background: #e08036">
            <h4>③</h4>
            <span>眼皮沉重 <br>分泌物多</span>
        </div>
        <div class="zhuanjia">
            <h5> <b>专家提醒</b>：干眼如果不治疗会变成顽固性干眼，而引起角膜炎，角膜溃疡，致使视力下降，甚至失明等。</h5>
        </div>
        <h4>仁和眼科干眼症治疗方法</h4>
<!-- 卡片 -->
        <ul class="mui-table-view">
            <li class="mui-media l1" v-for="item of list" :key="item.i">
                <a href="javascript:;">
                    <img class=" mui-pull-left" :src="item.img_url" width="100px" height="100px">
                    <div class="mui-media-body"  stylt="width:10%">
                        {{item.uname}}
                        <p>{{item.tel}}</p>
                    </div>
                </a>
            </li>
        </ul>
        <button type="button" class="mui-btn mui-btn-danger" style="top:80%;left:33%"><router-link to="/tal" style="color:#fff">
            点击查询费用
        </router-link>
        </button>
        <img src="http://127.0.0.1:3000/img/jmyz.jpg" width="90%" height="120px" style="margin: 10px 15px">
        <p style="width: 90%;margin:10px 15px">角膜移植术便是治疗角膜病致盲有效的主要手段，随着科学技术的发展，角膜移植已经成为一种非常成功的移植手术，大部分角膜盲患者可通过角膜移植而恢复有用视力。</p>
        <div>
            <img src="http://127.0.0.1:3000/img/3.jpg" alt="" style="height: 180px;width: 100%;">
            <div style="position: absolute;z-index: 1000;top:1230px;font:500 16px '黑体';color:#fff">
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
                    list:[]
                }
            },
            created(){
                  this.bingtai() 
                      },
             methods:{
               bingtai(){
        
            var url="http://127.0.0.1:3000/bingtai";
            this.axios.get(url).then(result=>{
            this.list=result.data.data;           
               });
               },             
              },
    }
    </script>
    <style>
       .daohanglan{
		width: 100%;
		height: 35px;
		background:#efeff4;
		display: flex;
		justify-content:space-around	
	}
     div.daohanglan>a{color: #000;margin-top:7px;font: 100 16px "黑体"  }
     .a3{
     margin-left:10px;
     padding-top:7px ;
         height:35px ;
         width: 95%;
         background: #326ad7;
         color:#fff
     }
     .yanjiao{
         padding-top:10px; 
         width: 120px;
         height: 120px;
         background: #4b7dde;
         color:#fff;
         text-align: center;
         border-radius: 50%;
         float: left;
         margin-left:3px 
     }
     .zhuanjia{
         clear: both;
         background:#326ad7;
        padding: 5px;
        margin: 140px 10px 10px
     }
     .zhuanjia>h5{color:#fff}
    .l1{
        margin:10px 5px ;
        border-bottom: 1px dashed #666
    }
    
    </style>
        