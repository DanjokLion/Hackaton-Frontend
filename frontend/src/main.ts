import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router/routes'

axios.defaults.baseURL = 'https://localhost:8080/api'

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.mount('#app');
app.use(router);
// Vue.prototype.$http = axios;