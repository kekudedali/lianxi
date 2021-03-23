import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'

//公共路由
export const constantRoutes = [{
        path: '',
        component: Layout,
        redirect: '/home',
        children: [{
            path: '/home',
            component: (resolve) => require(['@/views/index'], resolve),
            name: '首页',
            meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
        }],
        hidden: true,
    }, {
        path: '/element',
        component: Layout,
        hidden: true,
        children: [{
                path: '/swiper',
                component: (resolve) => require(['@/views/element/swiper'], resolve),
                name: '轮播图',
                meta: { title: '轮播图', icon: 'dashboard', noCache: true, affix: true }
            },
            {
                path: '/table',
                component: (resolve) => require(['@/views/element/table'], resolve),
                name: '表格',
                meta: { title: '表格', icon: 'dashboard', noCache: true, affix: true }
            }
        ]
    },
    {
        path: '/example',
        component: Layout,
        hidden: true,
        children: [{
            path: '/shoppingcar',
            component: (resolve) => require(['@/views/example/shoppingcar/index'], resolve),
            name: '购物车',
            meta: { title: '购物车', icon: 'dashboard', noCache: true, affix: true }
        }]
    }
]

export default new Router({
    mode: 'history', // 去掉url中的#
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})