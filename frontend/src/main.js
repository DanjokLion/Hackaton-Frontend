import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import Vue from 'vue';

axios.defaults.baseURL = 'https://localhost:8080/api'

createApp(App).mount('#app')
Vue.prototype.$http = axios