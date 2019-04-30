// 入口文件
import Vue from 'vue'
import  app from './App.vue'
//导入路由,安装路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);


//全局过滤器
import moment from 'moment'
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
});

//按需导入mintui组件并注册
import {Header} from 'mint-ui'
Vue.component(Header.name,Header);
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入，安装Vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);

//设置请求接口根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';

//导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import router from './router'
var vm = new Vue({
    el:'#app',
    render:function (createElement) {
        return createElement(app)
    },
    router,
});
