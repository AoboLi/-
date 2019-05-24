<template>
    <div class="app-jia">
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
        <img src="http://127.0.0.1:3000/img/20.png" height="180px" width="100%">	<br>
        <div class="bai">
            <i></i>
            <h4>白内障的诊断</h4>
            <p>世界卫生组织从群体防盲、治盲角度出发，对晶状体发生变性和混浊，变为不透明，以至影响视力，而矫正视力在0.7或以下者，方可诊断白内障。</p>
            <div>
               <a href="javascript:;"> 白内障免费<br>公益复查活动</a>
            </div>
            <span>红圈内为晶体浑浊，影响视力，或可致盲：</span>
            <img src="http://127.0.0.1:3000/img/tpzd.jpg" height="240px" width="80%">
            <div>
                <a href="javascript:;"> 咨询<br>白内障专家</a>
            </div>
        </div>
        <div class="bai">
            <i></i>
            <h4>白内障专家推断</h4>
            <img src="http://127.0.0.1:3000/img/12.jpg" height="240px" width="70%">
            <p style="color:#007dcd">
                →仁和眼科主任医师<br>
                →郑州跨世纪学术技术带头人<br>
                →荥阳市仁和眼科医院特聘专家
            </p>
            <button type="button" class="mui-btn mui-btn-success" style="top:75%;left:30%"><router-link to="/tal" style="color:#fff">
                点击在线咨询
            </router-link>
        </button>
        </div> 
        <div class="jingli">
           <i>擅长</i>
           <span>白内障、青光眼、眼外伤等各类手术</span>
        </div> <br>
        <div class="jingli">
            <i>经历</i>
            <span>从事眼科临床30余年，已成功完成各类白内障手术15万余例,是国内治疗白内障医术医德高，首屈一指的权威医生。</span>
        </div>
        <div>
            <img src="http://127.0.0.1:3000/img/3.jpg" alt="" style="height: 180px;width: 100%;">
            <div style="position: absolute;z-index: 1000;top:1260px;font:500 16px '黑体';color:#fff">
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
	 i{
         width: 20px;
         height: 12px;
         float: left;
         background: #007dcd;
         margin:4px 5px 5px 2px
     }
	.bai>h4{
        color:#004ea1
    }
    .bai>p{
        margin:13px
    }
    .bai>div{
        margin: 0 auto;
        width: 120px;
        height: 50px;
        text-align: center;
        background: #6db929
    }
    .bai>div>a{
        color:#fff;
        font:400 14px "黑体"
    }
    .bai>span{
        margin:0 52px;
        color:#004ea1;
        font-size: 14px;
    }
    .bai>img{
        margin: 0px 10%
    }
    .jingli>i{
        width: 30px;
        height: 20px;
       font-size: 12px;
        color:#fff;
        text-align: center;
    }
	</style>
	