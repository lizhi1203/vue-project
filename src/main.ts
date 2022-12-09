import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from '@/router'
import ElementPlus from 'element-plus'

window.onerror = function(e) {
  console.log(['https://stackoverflow.com/search?q=[js]+' + e])
}

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')

