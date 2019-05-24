<template>
    <div class="app_message">
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
        <!--留言板-->
        <!--输入部分-->
        <div class="sr">
            <textarea name="" id="" cols="30" rows="10" v-model="val"></textarea>
            <input type="submit" value="发布" @click="report">
        </div>
        <!--显示部分-->
        <div class="xs">
            <div v-for="(item,i) of list" :key="i">
                <p>匿名</p>
                <p>{{item.sj}}</p><br>
                <span>{{item.txt}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            val:"",
            list:[],
        }
    },
    created(){
    this.report()
    },
    methods:{   
        report(){
            var myDate=new Date();
            var vv=myDate.toLocaleString();
            var val=this.val;
            if(!val.trim()){
                this.$toast("留言不能为空");
                return;
            }
            //发送ajax请求
            var url ="http://127.0.0.1:3000/report";
                url+="?text="+val+"&sj="+vv;
            this.axios.get(url).then(result=>{
                this.list=result.data;
                this.val="";
            })
        } ,
}}
</script>
<style>
    /*输入内容*/
    .sr{
        padding-left: 10px;
    }
    .sr>textarea:first-child{
        margin-top: 10px;
        width: 90%;
        height: 150px;
        display: block;
        word-break: break-all;
        width: 97%;
    }
    .sr>input:nth-child(2){
        background: #4fae38;
        border:0;
    }
    /*显示内容*/
    .xs{
        width: 100%;
        height: 100%;
        padding: 10px 10px;
    }
    .xs>div{
        border-top: 1px solid #fff;
        background: #4fae38;
        width: 100%;
        min-height: 80px;
        padding: 10px 20px;
    }
    .xs>div>p{
        color: #fff;
        font-size: 20px;
        display: inline-block;       
        width: 40%;
    }
    .xs>div>p:nth-child(2){
        display: inline-block;
        width: 60%;
        text-align: right;
        color:#171a14;
        font-size: 14px;
    }
    .xs>div>span{
        color: #e9f199;
        font-size: 15px;
    }
</style>