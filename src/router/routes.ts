import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('pages/MainPage.vue')
            },
            {
                path: 'dashboard',
                component: () => import('pages/DashboardStaticPage.vue')
            },
            {
                path: 'statistics',
                component: () => import('pages/StatisticPage.vue')
            },
            {
                path: 'player-analysis',
                component: () => import('pages/PlayerAnalysisPage.vue')
            },
            {
                path: 'term-maps',
                component: () => import('pages/TermMapsPage.vue')
            },
            {
                path: 'dashboardTemp/:results',
                name: 'Dashboard',
                component: () => import('pages/DashboardTempPage.vue'),
                props: route => ({ results: route.params.results })
            }

        ]
    },
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue')
    }
]
export default routes
