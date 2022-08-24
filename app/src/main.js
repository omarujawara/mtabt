import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import store from './store/index'

import App from './App.vue'

const app = createApp(App)
app.use(store)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"