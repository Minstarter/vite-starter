import dayjs from "dayjs";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@styles/index.scss";
import "virtual:uno.css";

import "dayjs/locale/zh-cn";
import "element-plus/es/hooks/use-locale/index";

dayjs.locale("zh-cn");

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
