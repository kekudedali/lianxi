//路由懒加载  import Home from '@/components/home'
//路由懒加载（异步加载）resolve =>require(['@/view/home/index,vue'],resolve)
//更好的用户体验，首屏速度更快，解决白屏

let home = {
    path: '/home',
    name: 'home',
    component: resolve => require(['@/views/home/index.vue'], resolve),
    hidden: true,
    icon: 'el-icon-s-home',
    meta: {
        title: '首页',
        requiresAuth: true
    },
    noDropdown: true
}

export default home;