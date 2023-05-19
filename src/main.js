import './assets/style.css'
import '@/config/vee-validate/rules.js'
import '@/config/vee-validate/messages.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
