import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'

loadFonts()

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .mount('#app')
