<template>
 <div class="app-home">
    <header class="mui-bar mui-bar-nav" style="background:#4fae38;color:#fff">
        <h1 style="float: left">EYE</h1>  
        <h1 class="mui-title" style="color:#fff;font-size: 20px">眼科医院</h1>
    </header>	
    <div class="mui-content">
        <div id="slider" class="mui-slider mui-fullscreen">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator             mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile">
                        首页
                    </a>
                    <a class="mui-control-item" href="#item2mobile">
                        医院介绍
                    </a>
                    <a class="mui-control-item" href="#item4mobile">
                            案例
                        </a>
                    
                    <a class="mui-control-item" href="#item5mobile">
                        名医
                    </a>
                </div>
			</div>
            <div class="mui-slider-group">
                <div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
                    <div id="scroll1" class="mui-scroll-wrapper"  style="overflow:auto">
                        <div class="mui-scroll">
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell"   style="padding: 0">
                                    <mt-swipe :auto="4000" >   
                                        <mt-swipe-item v-for="item of list1" :key="item.id">
                                        <img :src="item.img_url"/>  
                                    </mt-swipe-item>
                                            
                                    </mt-swipe>
                                    <ul class="mui-table-view mui-grid-view mui-grid-9">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                            <router-link to="/jia">
                                                <img src="http://127.0.0.1:3000/img/近视手术.jpg"  width="70px">
                                                <div class="mui-media-body">近视手术</div>
                                            </router-link>
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                            <router-link to="/Exam02">
                                                <img src="http://127.0.0.1:3000/img/jinshi.jpg"  width="50px">
                                                    <div class="mui-media-body">白内障</div>
                                            </router-link>
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                            <router-link to="/Exam03">
                                                <img src="http://127.0.0.1:3000/img/角膜炎bing.jpg" alt="" width="50px">
                                                <div class="mui-media-body">角膜眼病</div>
                                            </router-link>
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                            <router-link to="/Exam04">
                                                <img src="http://127.0.0.1:3000/img/小儿眼病.jpg" alt="" width="50px">
                                                <div class="mui-media-body">小二眼病</div>
                                            </router-link>
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                            <router-link to="/Exam05">
                                                <img src="http://127.0.0.1:3000/img/青光眼.jpg" alt="" width="50px" >
                                                <div class="mui-media-body">青光眼</div>
                                            </router-link>
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                            <router-link to="/Exam06">
                                                <img src="http://127.0.0.1:3000/img/眼角疾病.jpg" alt="" width="50px">
                                                <div class="mui-media-body">斜弱视</div>
                                            </router-link>
                                        </li>
                                    </ul><br>
                                    <h3 class="yuyue">
                                            热门医生
                                        </h3>
                                    <!-- 医生预约 -->
                                    <mt-swipe :auto="4000" class="swipe">   
                                        <mt-swipe-item v-for="item of list6" :key="item.id">
                                            <div style="float:left;margin-left:5px">
                                                <img :src="item.img_url" alt="" style="width:110px;height:110px">
                                            </div>
                                            <div>
                                                 <span>姓名:{{item.uname}}<br>
                                                    简介:{{item.tel}}<br>
                                                    电话:{{item.tal}}
                                                </span>
                                            </div>
                                            <div style="clear: both;margin-left: 20px">
                                                <table>
                                                    <tr>
                                                        <td style="border:1px solid #000;width: 40px;">周一</td>
                                                        <td style="border:1px solid #000;width: 40px">周二</td>
                                                        <td style="border:1px solid #000;width: 40px">周三</td>
                                                        <td style="border:1px solid #000;width: 40px">周四</td>
                                                        <td style="border:1px solid #000;width: 40px">周五</td>
                                                        <td style="border:1px solid #000;width: 40px">周六</td>
                                                        <td style="border:1px solid #000;width: 40px">周日</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="border:1px solid #000"><a>{{item.zhouyi}}</a></td>
                                                        <td style="border:1px solid #000"><a>{{item.zhouer}}</a></td>
                                                        <td style="border:1px solid #000"><a>{{item.zhousan}}</a></td>
                                                        <td style="border:1px solid #000"><a>{{item.zhousi}}</a></td>
                                                        <td style="border:1px solid #000"><a>{{item.zhouwu}}</a></td>
                                                        <td style="border:1px solid #000"><a>{{item.zhouliu}}</a></td>
                                                        <td style="border:1px solid #000"><a>{{item.zhouri}}</a></td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </mt-swipe-item>             
                                    </mt-swipe>
                                    <!-- 预约挂号 -->
                                    <h3 class="yuyue">
                                        热点项目
                                    </h3>
                                    <table border="1px" width="372px">
                                        <tr>
                                            <td>全飞秒激光</td>
                                            <td>飞秒激光</td>
                                            <td>角膜移植</td>
                                            <td>结膜炎</td>
                                        </tr>
                                        <tr>
                                            <td>飞秒白内障</td>
                                            <td>医学配镜</td>
                                            <td>小孩近视</td>
                                            <td>角膜炎</td>
                                        </tr>
                                        <tr>
                                            <td>焕晶白内障</td>
                                            <td>黄斑病变</td>
                                            <td>小儿眼病</td>
                                            <td>飞蚊症</td>
                                        </tr>
                                        <tr>
                                            <td>视网膜脱落</td>
                                            <td>翼状胬肉</td>
                                            <td>泪道疾病</td>
                                            <td>青光眼</td>
                                        </tr>
                                        <tr>
                                            <td>糖尿病眼病</td>
                                            <td>眼睛干涩</td>
                                            <td>倒睫矫正</td>
                                            <td>红眼病</td>
                                        </tr>
                                    </table>
 <!-- 卡片 --> 
                                    <div class="mui-card" v-for="item of list" :key="item.i">
                                        <div class="mui-card-header mui-card-media"          style="height:40vw">
                                    <br>
                                            <img :src="item.img_url" alt="" height="140px" width="100%" style="position:absolute;top:10px">
                                            <h3 style="position: absolute;top:30px">{{item.biaoti}}</h3>
                                            <span  style="position: absolute;top:70px">{{item.title}}</span>
                                            <p  style="position: absolute;top:100px">{{item.sel}}</p>
                                        <br>
                                        </div>
                                        <div class="mui-card-content">
                                            <div class="mui-card-content-inner">
                                                <p>Posted on January 20, 2019</p>
                                                <p style="color: #333;">{{item.nei}}</p>
                                            </div>
                                        </div>
                                        <div class="mui-card-footer">
                                            <a class="mui-card-link">Like</a>
                                            <a class="mui-card-link">Read more</a>
                                        </div>
                                     </div>
                                     <div style="clear:both;">
                                        <img src="http://127.0.0.1:3000/img/3.jpg" alt="" style="height: 180px;">
                                        <div style="position: absolute;z-index: 1000;top:2750px;font:500 16px '黑体';color:#fff">
                                            <br>  
                                            <br><br><br>
                                            门诊时间:8:30-18:30
                                            <br>
                                            电话:00300300&nbsp;&nbsp;&nbsp;5454545555
                                            <br>
                                            地址:河南省郑州市西四环
                                        </div>
                                        
                                    </div>
                                <!-- 结尾 -->
                                </li>
                                                                    
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="item2mobile" class="mui-slider-item mui-control-content">
                    <div class="mui-scroll-wrapper"   style="overflow:auto">
                        <div class="mui-scroll">
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell">
                                    <div style="text-align:center">
                                        <img src="http://127.0.0.1:3000/img/大门.jpg" alt="" height="140px">
                                        <h3 style="color:#0193de">专业品牌</h3>
                                        <h4>打造高品质医疗服务</h4>
                                        <p>
                                        医院除开展常规手术外，
                                        还能开展复杂手术，爱尔深知，清晰完美的视觉不仅源于先进的眼科技术，
                                        也依托先进的眼科诊疗设备，自成立以来，
                                        不断引进同步先进技术及设备，构建起先进、同步欧美的技术和设备体系。
                                        </p><br><br>
                                        <p>&lt;上下滑动查看更多&gt;</p>
                                    </div>
                                    <div style="height:250px;overflow:auto;margin-bottom: 20px">
                                        <div v-for="item of list2" :key="item.i">
                                            <div style="width:160px;float: left; margin:5px;height: 240px;border:2px solid #0193de" >
                                                <img :src="item.img_url" alt="">
                                                <p> {{item.title}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="height:500px ;">
                                        <button type="button" class="mui-btn mui-btn-primary" style="top:70%;left:34%">
                                                点击查看更多    
                                        </button><br><br>
                                        <h2 style="text-align: center;color: #0193de">诊疗科室 </h2>
                                        <h4 style="text-align: center;color: #666">眼病诊疗精细化分型 </h4><br>
                                        <span class="jianjie2">近视手术</span>
                                        <span class="jianjie2">医学配镜</span>
                                        <span class="jianjie2">&nbsp;白内障&nbsp;</span><br><br>
                                        <span class="jianjie2">角膜眼镜</span>
                                        <span class="jianjie2">眼底疾病</span>
                                        <span class="jianjie2">&nbsp;斜弱视&nbsp;</span><br><br>
                                        <span class="jianjie2">小儿眼病</span>
                                        <span class="jianjie2">泪道疾病</span>
                                        <span class="jianjie2">&nbsp;青光眼&nbsp;</span><br><br>
                                        <span class="jianjie2">角膜移植</span>
                                        <span class="jianjie2">眼部整形</span>
                                        <span class="jianjie2">&nbsp;飞蚊症&nbsp;</span><br><br>
                                    </div>
                                    <button type="button" class="mui-btn mui-btn-primary" style="top:85%;left:4%">
                                            <router-link to="/Login" style="color:#fff">    问症状？查费用 ？点这里 </router-link>
                                        
                                    </button>
                                    <button type="button" class="mui-btn mui-btn-success" style="top:85%;left:58%"><router-link to="/tal" style="color:#fff"> 点击在线咨询问诊</router-link>
                                    </button>
                                    <button type="button" class="mui-btn mui-btn-danger" style="top:89%;left:4%"><router-link to="/Login" style="color:#fff"> 点击了解医院详情 </router-link>
                                    </button>
                                    <button type="button" class="mui-btn mui-btn-royal"style="top:89%;left:58%"><router-link to="/message" style="color:#fff"> 查看留言板</router-link>
                                    </button>
                                    <button type="button" class="mui-btn mui-btn-warning" style="top:92%;left:28%">
                                            <router-link to="/ditu" style="color:#fff"> 点击咨询来院路线</router-link> 
                                        <span class="mui-badge mui-badge-warning"></span>
                                    </button>
                                </li>
        
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="item4mobile" class="mui-slider-item mui-control-content">
                    <div class="mui-scroll-wrapper" style="overflow: auto">
                        <div class="mui-scroll">
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell" style="padding: 0">
                                    <div class="path" style="margin-bottom: 5px">当前位置：首页 &gt; 案例分享</div>
                                    <div style="width:100%;height: 200px;overflow: auto">
                                        <ul style="list-style:disc;padding-left:3px">
                                            <li style="margin-bottom:5px;border-bottom: 1px solid #dedede" v-for="item of list3" :key="item.id">
                                            <a href="javascript:;" style="color:#111">{{item.title}}</a> 
                                            </li>
                                            <span style="margin-left:36%;font-size: 18px " @click="anli"><b>加载更多</b></span><br>
                                            <span style="margin-left:44%;font-size: 20px">↓</span>
                                        </ul>
                                    </div>
                                    <div><br>
                                        <div>
                                            <a href="javascript:;">专家团队&nbsp;&nbsp;more&gt;&gt;</a>
                                        </div>
                                        <div class="zhengjian" v-for="item of list4" :key="item.i" style="margin-left:15px ">
                                          <img :src="item.img_url">
                                          <div>{{item.uname}}</div>
                                        </div>
                                    </div>
                                    <div style="clear:both;">
                                        <img src="http://127.0.0.1:3000/img/3.jpg" alt="" style="height: 180px;">
                                        <div style="position: absolute;z-index: 1000;top:730px;font:500 16px '黑体';color:#fff">
                                            <br>  
                                            <br><br><br>
                                            门诊时间:8:30-18:30
                                            <br>
                                            电话:00300300&nbsp;&nbsp;&nbsp;5454545555
                                            <br>
                                            地址:河南省郑州市西四环
                                        </div> 
                                    </div> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="item5mobile" class="mui-slider-item mui-control-content">
                    <div class="mui-scroll-wrapper"  style="overflow: auto">
                        <div class="mui-scroll">
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell"  style="padding: 0">                               
                                    <div style="background: #bee3fd;height: 160px;margin: 10px 5px;" v-for="item of list5">
                                            <img :src="item.img_url" style="float:left;margin:5px 10px;width: 30%;height: 140px;">
                                            <br><h4>{{item.uname}}</h4>
                                            <span>{{item.tel}} <br> {{item.tal}}</span>
                                            <button type="button" class="mui-btn mui-btn-success" style="top:75%;left:2%"> <router-link to="/tal" style="color:#fff">点击在线咨询</router-link>
                                                    </button>
                                            <button type="button" class="mui-btn mui-btn-danger" style="top:80%;left:4%"><router-link to="/Login" style="color:#fff">点击预约手术 </router-link>
                                            </button>
                                    </div>
                                    <div style="clear:both;">
                                        <img src="http://127.0.0.1:3000/img/3.jpg" alt="" style="height: 180px;">
                                        <div style="position: absolute;z-index: 1000;top:880px;font:500 16px '黑体';color:#fff">
                                            <br>  
                                            <br><br><br>
                                            门诊时间:8:30-18:30
                                            <br>
                                            电话:00300300&nbsp;&nbsp;&nbsp;5454545555
                                            <br>
                                            地址:河南省郑州市西四环
                                        </div> 
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>     
</div>

</template>
<script>
    
export default {
data() {
    return {
        pno:1,
        list3:[],
        list1:[],
        list:[],
        list2:[],
        list4:[],
        list5:[],
        list6:[],
       }},
created(){

    this.lun() ;
    this.loadImgList();
    this.jiqi();
    this.zhengjian();
    this.mingyi();
    this.yuyue();
     
  var url="http://127.0.0.1:3000/anli?";
            //2.发送ajax请求 无参数
            this.axios.get(url).then(result=>{
                //3.接收返回商品数组
                this.list3=result.data.data
                //4.保存list
                
            }) 
},
methods:{
    loadImgList(){
        // console.log(123);
        var url="http://127.0.0.1:3000/home";
        this.axios.get(url).then(result=>{
            this.list=result.data.data;           
        });
    },       
    lun(){var url="http://127.0.0.1:3000/lun";
 
 this.axios.get(url).then(result=>{
     this.list1=result.data.data;           
 });
},
jiqi(){
        // console.log(123);
        var url="http://127.0.0.1:3000/jiqi";
        this.axios.get(url).then(result=>{
            this.list2=result.data.data;           
        });
    }, 
    anli(){
                if(this.hasMore==false){
                   this.$toast("没有更多数据了.....");
                    return;
                }
                this.pno++;
                //console.log(123)
                //1. 创建url请求地址
                var url="http://127.0.0.1:3000/anli";
                //2. 添加参数pno=2;
               // url+="?pno=2";

                    url+="?pno="+this.pno;
                    this.axios.get(url).then(result=>{
                       var rows=this.list3.concat(result.data.data)
                       this.list3=rows;
                       if(this.pno>=result.data.pageCount){
                        this.hasMore=false;
                       }
                   });
            },
            zhengjian(){var url="http://127.0.0.1:3000/zhengjian";
 
 this.axios.get(url).then(result=>{
     this.list4=result.data.data;           
 });
},
mingyi(){
        // console.log(123);
        var url="http://127.0.0.1:3000/mingyi";
        this.axios.get(url).then(result=>{
            this.list5=result.data.data;           
        });
    }, 
yuyue(){
    // console.log(123);
    var url="http://127.0.0.1:3000/yuyue";
    this.axios.get(url).then(result=>{
        this.list6=result.data.data;           
    });
},
    
}
}
</script>
<style>
    a.mui-tab-item>span.mui-tab-label{
      color:#fff  
    }
    .app-home{
    padding-top:50px;
    padding-bottom:20px;
    overflow: hidden;  
    }
.app-home .mint-swipe{
    height: 170px;

}

.mint-swipe img{
    width: 100%;
}
/* 九宫格图片的宽度和高度 */
.app-home .mui-grid-9 img{
    width: 60px;
    height: 60px;
}
.app-home ul.mui-grid-9{
    background-color:#fff;
    
}
.zhengjian{
width: 140px;
height: 200px;
float: left;
margin: 5px
}
.zhengjian img{
    height: 90%;
    width: 100%;    
}
.zhengjian div{
    width: 140px;
    height: 20px;
  margin-top: -6px;
  background:#8c8c8c
  }
 .yuyue{
     text-align: center;
     margin: 10px 35%;
     padding: 6px;
     background:#4fae38;
     color:#fff
 } 
 .jianjie2{
    color:#0193de;border:1px solid #0193de;padding:5px 10px ;border-radius:5px;font-size: 18px;
    margin: 10px;
 }
</style>
