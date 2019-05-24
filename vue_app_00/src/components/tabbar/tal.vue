<template>
    <div class="headers">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">
               <img src="http://127.0.0.1:3000/img/x.png" alt="" height="50px" style="vertical-align: middle">
              小博士
            </h1>
        </header><br><br>
        <div id="msg-list" style="width:100%;height: 540px;background:#fff;overflow: auto;">
            <div style="margin: 10px 10px 10px 10px;">
              <img src="http://127.0.0.1:3000/img/250.jpg" alt="" style="width: 60px;height: 60px;border-radius: 50%;left:1%;margin-top:-160px ">
              <span style="background: rosybrown;margin:20px 10px 10px 10px;max-width: 220px;word-break:break-all;display: inline-block;font-size:14px;padding:10px;max-height:250px;color:#fff">
                您好，这里是眼科医院预约挂号平台。如不方便打字，可以留下您的联系方式，稍后回复您。也可以拨打<a>1325621131</a>或添加微信:<a>usysb_25o</a>、QQ：<a>1041535926</a>进行咨询               
             </span>
            </div> 
            <div v-for="(name,index) in arr" v-on:click="dele(index)" style="margin: 10px 10px 10px 30px;float:right">
                <span style="background:rosybrown;margin:0px 30px 0px 2px;max-width: 230px;min-width:60px;min-height:40px;word-break:break-all;display: inline-block;font-size:14px;max-height:300px;color: #fff;padding:10px ;">
                   {{name.text}}
                </span>
                <img src="http://127.0.0.1:3000/img/cxk.jpg" alt="" style="width: 60px;height: 60px;border-radius: 50%;">
            </div>
        </div>       
      <div class="form" style="top:600px;left:20px;position: fixed">
        <label for="" class="footer-right">
            <i id='msg-type' class="mui-icon mui-icon-mic" style="height: 0;margin:10px "></i>
        </label>
        <textarea type="text" v-model="text" style="width: 60%;height: 43px;"></textarea>       
        <button v-on:click="tabs" style="height: 40px;margin:1px 10px">发送</button>
      </div> 
    </div>
    </template>
    <script>
    export default {
    data(){
      return {
       text:"",
       arr:[],
      }
    },
     methods: {
        tabs(){
           this.arr.push({text:this.text});
           this.text="";
           console.log(this.arr)
        },
        dele(index){
          this.arr.splice(index,1)
         }
     }
    };
    </script>