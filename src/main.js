// 入口文件
import Vue from 'vue'
import  app from './App.vue'
//按需导入mintui组件并注册
import {Header} from 'mint-ui'
Vue.component(Header.name,Header);

//导入MUI样式
import './lib/mui/css/mui.min.css'


var vm = new Vue({
    el:'#app',
    render:function (createElement) {
        return createElement(app)
    }
});
