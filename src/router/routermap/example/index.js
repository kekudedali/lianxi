const shoppingcar = {
    path: '/example',
    name: 'example',
    component: resolve => (['@/view/example/index.vue'], resolve),
    hiddden: false,
    icon: 'el-icon-s-home',
    meta: {
        title: '例子',
        requiresAuth: true,
    },
    noDropdown: true,
}
const Example = {
    path: '/example',
    name: 'example',
    component: resolve => (['@/view/example/index.vue'], resolve),
    hiddden: false,
    icon: 'el-icon-s-home',
    meta: {
        title: '例子',
        requiresAuth: true,
    },
    noDropdown: true,
    children: [
        shoppingcar
    ]
}

export default [Example];