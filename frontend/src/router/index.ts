import { route } from 'quasar/wrappers'
import {
    createRouter,
    createWebHashHistory,
    createWebHistory
} from 'vue-router'

import routes from './routes'

export default route((/* { store, ssrContext } */) => {
    const createHistory = process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory

    const Router = createRouter({
        scrollBehavior: () => ({ left: 0, top: 0 }),
        routes,
        history: createHistory(process.env.VUE_ROUTER_BASE)
    })

    return Router
})
