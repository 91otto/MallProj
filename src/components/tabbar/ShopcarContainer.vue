<template>
    <div class="shopcar-container">
       <div class="goods-list">

         <!--  商品列表区域-->
           <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
               <div class="mui-card-content">
                   <div class="mui-card-content-inner">
                       <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
                       @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                       <img :src="item.thumb_path" alt="">
                      <div class="info">
                          <h1>{{item.title}}</h1>
                          <p >
                              <span class="price">￥{{ item.sell_price }}</span>
                              <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                              <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                          </p>
                      </div>
                   </div>
               </div>
           </div>

           <!-- 商品结算区域-->
           <div class="mui-card">
               <div class="mui-card-content">
                   <div class="mui-card-content-inner ">
                    <div class="left">
                        <p>总计(不包括运费):</p>
                        <p>已选：{{$store.getters.getGoodsCountAndAmount.count}} 件，总价：
                            {{$store.getters.getGoodsCountAndAmount.amount}}元</p>
                    </div>
                   </div>
                   <mt-button type="danger">去结算</mt-button>
               </div>
           </div>
       </div>
    </div>

</template>

<script>
    import numbox from  '../subcompoents/shopcar_numbox.vue'
    export default {
        data(){
            return{
                goodslist: []
            }
        },
          created() {
            this.getGoodsList();
          },
        methods:{
            getGoodsList(){
                var idArr=[];
                this.$store.state.car.forEach(item=>idArr.push(item.id));
                if (idArr.length <= 0)
                    return;
                this.$http.get('api/goods/getshopcarlist/' + idArr.join(','))
                    .then(result=>{
                        if (result.body.status === 0){
                            this.goodslist = result.body.message;
                        }
                    })
            },
             remove(id,index){
                this.goodslist.splice(index,1);
                this.$store.commit("removeFromCar",id);
            },
            selectedChanged(id,val){
                this.$store.commit("updateGoodsSelected",{id:id,selected:val})
            },

        },
        components:{numbox},
    }
</script>

<style lang="scss" scoped>
.shopcar-container{
    overflow:hidden ;
    background-color: #eeeeee;
    .goods-list{
        img{
            width:65px ;
            height: 65px;
        }
        h1{
            font-size: 12px;
        }
        .info{
            .price{
               color: red;
                font-weight: bold;
                font-size: 10px;
                margin-left: 2px;
                margin-top: 1px;
            }
        }
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
    }
}



</style>
