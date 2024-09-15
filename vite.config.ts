import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: true,
    }),
    vue(),
    VueDevTools({
      launchEditor: "code-insiders", // Your editor
    }),
  ],
});
