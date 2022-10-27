import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
.use(router)
.use(VueAxios, axios)
.mount('#app')

axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT