import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path:'/',
        name:'Home',
        component: () => import('../page/Home.vue')
    },
    {
        path:'/About',
        name:'About',
        component: () => import('../page/About.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router