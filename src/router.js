import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import newsList from './components/news/newsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import photoList from './components/photos/photoList.vue'
import photoInfo from './components/photos/photeInfo.vue'
import goodsList from './components/goods/goodsList.vue'
import goodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/goodsdesc.vue'
import GoodsComment from './components/goods/goodscomment.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [// 配置路由规则
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/search',component:SearchContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/home/newsList',component:newsList},
    { path: '/home/newsinfo/:id', component: NewsInfo },
    { path: '/home/photoList' , component:  photoList },
    { path: '/home/photoInfo/:id' , component:  photoInfo },
    { path: '/home/goodsList' , component:  goodsList },
    {path:'/home/goodsinfo/:id',component:goodsInfo},
    {path:'/home/goodsdesc/:id',component:GoodsDesc},
    {path:'/home/goodscomment/:id',component:GoodsComment},
  ],
  linkActiveClass:'mui-active' //使选中的路由标志高亮
});

// 把路由对象暴露出去
export default router
