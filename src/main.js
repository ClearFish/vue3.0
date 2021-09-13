import { createApp } from 'vue'
import App from './App.vue'
// import store from "./store"
import router from "./router"
import {ElButton} from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// import "element-plus/packages/theme-chalk/src/base.scss"

const app = createApp(App);
app.use(ElButton)
app.use({ size: 'small', zIndex: 3000 })
app.use(router).mount("#app")
