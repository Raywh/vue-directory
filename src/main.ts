import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import './style.css'

import 'primevue/resources/themes/lara-light-green/theme.css'

import App from './App.vue'
import ToastService from 'primevue/toastservice';
const app = createApp(App);
const pinia = createPinia();
// import pinia  from '@/store'
app.use(ToastService);
app.use(pinia)
app.use(PrimeVue);
app.mount('#app');
