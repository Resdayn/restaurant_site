import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheNav from './components/UI/TheNav.vue'

const app = createApp(App);

app.component('the-nav', TheNav);

app.use(router).mount('#app');