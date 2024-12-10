import dayjs from 'dayjs';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createApp, type Component } from 'vue';

import 'dayjs/locale/zh-cn';
import 'element-plus/es/hooks/use-locale/index';
import 'virtual:uno.css';

import '@styles/index.scss';

import App from './App.vue';
import router from './router';

dayjs.locale('zh-cn');

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App as Component);

const _com = app;

const _func = (a: string, _b: number) => a;

app.use(pinia);
app.use(router);
app.mount('#app');
