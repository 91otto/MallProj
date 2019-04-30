<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList" :key="item.img">
                <img :src="item.img">
            </mt-swipe-item>

        </mt-swipe>
        <!--六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
                <img src="../../images/menu1.png">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu2.png">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png">
                <div class="mui-media-body">联系我们</div></a></li>


        </ul>

        <h3>Home</h3>
    </div>

</template>

<script>
    export default {
     data(){
         return {
             lunboList:[]
         }
     },
     created(){
         this.getLunbotu();
     },
     methods:{
       getLunbotu(){
           this.$http.get("api/getlunbo").then(result =>{
              if (result.body.status === 0){
                  this.lunboList = result.body.message;
              }
          })
       }
     },

 }

</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item:nth-child(1){
        background-color:red;
    }
    .mint-swipe-item:nth-child(2){
        background-color:ghostwhite;
    }
    .mint-swipe-item:nth-child(3){
        background-color:darkblue;
    }
}
    img{
        width: 100%;
        height: 100%;
    }

.mui-grid-view.mui-grid-9  {
    border:none;
    background-color: white ;
    img{
        width:60px;
        height: 60px;
    }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    margin: 0;
    padding: 11px 15px;
    vertical-align: top;
    border-right: 0;
    border-bottom: 0;
}
</style>
