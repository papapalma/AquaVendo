import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { initFlowbite } from 'flowbite';
initFlowbite();

createApp(App).use(router).mount('#app')
