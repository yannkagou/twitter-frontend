import '@fortawesome/fontawesome-free/css/all.css'
import './assets/main.css'
import 'material-icons/iconfont/material-icons.css'
import axios from 'axios'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)


axios.defaults.baseURL = 'http://localhost:8000'

app.use(createPinia())
app.use(router, axios)

app.mount('#app')
