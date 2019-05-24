<template>
    <div id="app">
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
        </header><br>
        <div style="margin-left:0px;width: 300px;">
           <h3>来院路线</h3>
           <p><b>乘坐郑上1路:</b>到大溪地下车,在商隐路与郑上路交叉口向南50米路东,荥阳青春筑时尚酒店旁边</p>
           <p><b>乘坐11路公交->7/10公交:</b>到大溪地下车,在商隐路与郑上路交叉口向南50米路东,荥阳青春筑时尚酒店旁边</p>
        </div>
      <div id="allmap" ref="allmap"></div>
     <router-view></router-view>
    </div>
  </template>
   
  <script>
  export default {
    name: 'App',
    methods:{
      map(){
        let map =new BMap.Map(this.$refs.allmap); // 创建Map实例
        map.centerAndZoom(new BMap.Point(113.454042,34.773858), 17);// 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl({//添加地图类型控件
          mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]}));
        map.setCurrentCity("郑州");// 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      }
   
    },
    mounted(){
      this.map()
   
    }
  }
  </script>
   
  <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    color: #2c3e50;
    margin-top: 40px;
  }
  #allmap{
    height: 430px;
    overflow: hidden;
   
  }
  </style>
 