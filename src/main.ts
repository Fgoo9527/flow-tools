import { createApp } from 'vue'
import App from './App.vue'
import './style/index.css' // 挂载tailwind
import store from './store/index'
import router from './router'
import './permission'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
