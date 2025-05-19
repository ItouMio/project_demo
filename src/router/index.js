import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/components/homePage.vue'),
        children: [
            {
                path: '/home',
                redirect: '/home/users'
            },
            {
                path: 'users',
                component: () => import('@/components/subcomponents/UserManage.vue')
            },
            {
                path: 'users/:id',
                name: 'UserDetail',
                component: () => import('@/components/subcomponents/UserData.vue')
            },
            {
                path: 'permission',
                component: () => import('@/components/subcomponents/PermissionManage.vue')
            },
            {
                path: 'goods',
                component: () => import('@/components/subcomponents/GoodsManage.vue')
            },
            {
                path: 'order',
                component: () => import('@/components/subcomponents/OrderManage.vue')
            },
            {
                path: 'setting',
                component: () => import('@/components/subcomponents/SystemSetting.vue')
            },
        ]
    },
    {
        path: '/login',
        component: () => import('@/components/LoginPage.vue')
    },
    {
        path: '/todolist',
        component: () => import('@/components/todoList.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})


// 路由守卫
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if (!token && to.path !== '/login') {
        // 没登录，不能去别的页面，跳回登录
        next('/login')
    }
    else if (token && to.path === '/login') {
        // 登录了，还想回 login，直接去 home
        next('/home')
    }
    else {
        next()
    }
})

// 导出路由
export default router