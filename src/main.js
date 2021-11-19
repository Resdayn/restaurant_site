import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from './components/Base/BaseButton';

const app = createApp(App);

app.component('base-button', BaseButton);

app.use(router).mount('#app');