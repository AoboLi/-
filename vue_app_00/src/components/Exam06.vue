<template>
    <div class="app-Exam05">                
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
        <img src="http://127.0.0.1:3000/img/topimg10.jpg"  style="height: 180px;width: 100%;">
        <h3 style="background:#2ca001;width:95%;margin-left:10px;padding-top:7px;height: 40px;text-align: center;color:#fff" >斜视介绍</h3><br>
        <h4 style="width:100%;color: #1DAD4E;text-align: center" >斜视——孩子眼睛的“杀手”</h4><br>
        <p style="margin: 20px">“斜视”是指眼位不正，常见的是眼球向内偏斜，医学上称内斜视，俗称“对眼”、“斗鸡眼”，目前我国儿童斜视患病率已超1%。</p>
        <h4 style="width:100%;color: #1DAD4E;text-align: center" >弱视——“视力残障”的罪魁祸首</h4><br>
        <p style="margin: 20px">“弱视”是指眼球无器质性病变的情况下矫正视力小于0.9的视力，无立体视觉。切勿错过3——6岁黄金治疗期，超过12岁弱视成“绝症”， 预防弱视的关键是早发现、早治疗。</p>
        <button type="button" class="mui-btn mui-btn-success" style="top:75%;left:13%">无法准确判断孩子症状？点击在线咨询
        </button><br><br>
        <h3 style="background:#2ca001;width:95%;margin-left:10px;padding-top:7px;height: 40px;text-align: center;color:#fff" >斜视症状及危害</h3><br>
        <h4 style="width:120px;text-align: center;background: #d2f3c4;color:#2ca001 ;padding: 20px;position: absolute">
            斜视的<br>表现症状
        </h4>
        <img src="http://127.0.0.1:3000/img/bgimg (3).jpg" width="100%"><br>
        <h3 style="background:#2ca001;width:95%;margin-left:10px;padding-top:7px;height: 40px;text-align: center;color:#fff" >弱视症状及危害</h3><br>
        <div style="width: 98%;background:#ffffc1;margin:3px">
            <h4 style="text-align: center;color:#2ca001 ;padding: 20px;">
                    如何判断是否出现弱视
            </h4>
            <img src="http://127.0.0.1:3000/img/bgimg (4).jpg" height="120px" style="margin:5px;vertical-align:top;float: left">
           <span> 1 写字重叠，不整齐，不成行<br> 2 看东西的时候很吃力，喜欢凑得很近<br> 3 喜欢歪头、偏脸看书<br> 4 在阳光下一眼眯缝怕光<br> 5 总是斜视着看东西<br></span>
           <br>
            <br>
        </div><br>
        <div style="background: #bee3fd;height: 160px">
            <img src="http://127.0.0.1:3000/img/7.jpg" width="30%" style="float:left;margin:5px 10px">
            <br><h4>陈学国</h4>
            <span>眼科博士后<br>河南省眼科专业委员会委员 <br>河南省医学会医疗事故技术鉴定专家</span>
            <button type="button" class="mui-btn mui-btn-success" style="top:75%;left:2%"><router-link to="/tal" style="color:#fff">
                点击在线咨询
            </router-link>
                    </button>
            <button type="button" class="mui-btn mui-btn-danger" style="top:80%;left:4%"><router-link to="/Login" style="color:#fff">
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
            </router-link>
                    </button>
            <button type="button" class="mui-btn mui-btn-danger" style="top:80%;left:4%"><router-link to="/Login" style="color:#fff">
                点击预约手术 
            </router-link>
            </button>
        </div><br>
        <div>
            <img src="http://127.0.0.1:3000/img/3.jpg" alt="" style="height: 180px;width: 100%;">
            <div style="position: absolute;z-index: 1000;top:1630px;font:500 16px '黑体';color:#fff">
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
       
    </style>
    