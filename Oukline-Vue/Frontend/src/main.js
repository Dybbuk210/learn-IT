import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import GoogleAnalitics from './googleanalitics'

// PRIDAJ TOTO:
import { createHead } from '@vueuse/head'

// Inicializuj Vue aplikáciu
const app = createApp(App)

// Inicializuj vueuse/head a pripoj do aplikácie
const head = createHead()
app.use(head)

// Napoj router a ďalšie veci
app.use(router)
GoogleAnalitics(router)

// Mountni aplikáciu do DOMu
app.mount('#app')