import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router/routes'
import quasarUserOptions from './quasar-user-options';
import { Quasar, Notify, Loading } from 'quasar'

axios.defaults.baseURL = 'https://localhost:8080/api'

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(router)
    .mount('#app')
// Vue.prototype.$http = axios;