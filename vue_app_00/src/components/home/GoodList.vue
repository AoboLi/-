<template>
    <div class="app-goodlist">
        <!-- 1 商品列表——两行两列 -->
        <div class="goods-item" v-for="item of list" :key="item.i">
            <!-- 1.1 图片 -->
            <img src="http://127.0.0.1:3000/img2/3.png" alt="">
            <!-- 1.2 商品名称 -->
            <h4>{{item.lname}}</h4>
            <!-- 1.3 商品价格 -->
            <h4 class="now">{{item.price}}</h4>
        </div>
        <mt-button size="large" type="primary" @click="loadMore">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[],
                pno:1  //接收服务器返回商品数组
              
            }
        },
        created () {
            //console.log(123)
            //1.创建变量，保存请求地址 url
            var url="http://127.0.0.1:3000/getGoodList?";
            //2.发送ajax请求 无参数
            this.axios.get(url).then(result=>{
                //3.接收返回商品数组
                this.list=result.data.data
                //4.保存list
                console.log(this.list)
            })
           
       console.log(this.$route.query.id); 
        },
      
        methods: {
            loadMore(){
                if(this.hasMore==false){
                   this.$toast("没有更多数据了.....");
                    return;
                }
                this.pno++;
                //console.log(123)
                //1. 创建url请求地址
                var url="http://127.0.0.1:3000/getGoodList";
                //2. 添加参数pno=2;
               // url+="?pno=2";
               
                
                    
                    url+="?pno="+this.pno;
                    this.axios.get(url).then(result=>{
                       var rows=this.list.concat(result.data.data)
                       this.list=rows;
                       if(this.pno>=result.data.pageCount){
                        this.hasMore=false;
                       }
                   });
            }
        }
    }
</script>
<style>
    .app-goodlist{
        display: flex;   /**弹性布局**/
        flex-wrap: wrap;  /**子元素换行**/
        justify-content: space-between;  /**两端对齐**/
    }
    .app-goodlist .goods-item{
        width:49%;
        border:1px solid #ccc;   
        margin:2px 0;
        padding:2px;
        display:flex;         
        flex-direction: column;            /**排列方式：按列**/
        min-height: 245px;
    }
    .app-goodlist .goods-item img{
        width:100%;
    }
</style>
