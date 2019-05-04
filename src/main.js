// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter);

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex);

var car = JSON.parse(localStorage.getItem('car')||'[]');
var store = new Vuex.Store(
    {
        state:{
            car:car,//car存储购物车的数据 格式:{id:'id',count:'要购买的数量',price:'单价',selected:false}
        },
        mutations:{//mutations里的方法第一个参数永远是state
            addToCar(state,goodsinfomation){
                //点击加入购物车，保存商品信息到数组car上
                var flag = false;

                state.car.some(item=>{
                    if (item.id===goodsinfomation.id){
                        item.count += parseInt(goodsinfomation.count);
                        flag = true;
                        return true;
                    }
                });

                if (flag === false){
                    state.car.push(goodsinfomation);
                }

                localStorage.setItem('car',JSON.stringify(state.car));

            },
            updateGoodsInfo(state,goodsinfo){
                    state.car.some(item=>{
                        if (item.id == goodsinfo.id){ //最好都用==
                            item.count = parseInt(goodsinfo.count);
                            return true
                        }
                    });
                localStorage.setItem('car',JSON.stringify(state.car));
            },
            removeFromCar(state,id){
                state.car.some((item,i)=>{
                    if (item.id == id){ //这里必须用==，用===会改不了购物车
                        state.car.splice(i,1);
                        return true;
                    }
                });
                localStorage.setItem('car',JSON.stringify(state.car));
            },
            updateGoodsSelected(state,info){
                state.car.some(item=>{
                    if (item.id == info.id){
                        item.selected = info.selected;
                    }
                });
                localStorage.setItem('car',JSON.stringify(state.car));
            },
        },
        getters:{
            getAllCount(state){
                var count = 0;
                state.car.forEach(item=>{
                    count += item.count;
                });
                return count;
            },
            getGoodsCount(state){
                var goodscount = {};
                state.car.forEach(item=>{
                    goodscount[item.id] = item.count;
                });
                return goodscount;
            },
            getGoodsSelected(state){
                var option = {};
                state.car.forEach(item=>{
                    option[item.id] = item.selected;
                });
                return option;
            },
            getGoodsCountAndAmount(state){
              var count_amount = {
                  count:0,
                  amount:0,
              };
              state.car.forEach(item=>{
                  if (item.selected === true){
                   count_amount.count += item.count;
                   count_amount.amount += item.price*item.count;
                  }
              });
                return count_amount;
            },
        },
    }
);


// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
});

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource);
// 设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'


// 按需导入 Mint-UI 中的组件
/* import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload); */
import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'


// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview);


// 1.3 导入自己的 router.js 路由模块
import router from './router.js'


// 导入 App 根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router, // 1.4 挂载路由对象到 VM 实例上
    store,
});
