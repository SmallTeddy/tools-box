import { createApp } from "vue";
import App from "./App.vue";

// plugins
import ElementPlus from 'element-plus'

// styles
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './styles/base.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

// use plugins
app.use(ElementPlus)

app.mount('#app')
