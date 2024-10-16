import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import ElementPlus from "unplugin-element-plus/vite";
import { defineConfig } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";
import tsconfigPaths from "vite-tsconfig-paths";

import packageJson from "./package.json";

const pathResolve = (dir: string): string => {
  return fileURLToPath(new URL(`./${dir}`, import.meta.url));
};

// https://vitejs.dev/config/
export default defineConfig({
  // ...
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },

  plugins: [
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: true,
    }),
    ElementPlus({ useSource: true, defaultLocale: "zh-cn" }),
    tsconfigPaths({
      root: ".",
      projects: [pathResolve("tsconfig.app.json")],
      configNames: ["tsconfig.app.json"],
    }),
    UnoCSS(),
    vue(),
    VueDevTools({
      launchEditor: "code-insiders", // Your editor
    }),
  ],

  resolve: {
    alias: {
      "@fonts": pathResolve("src/assets/fonts"),
      "@images": pathResolve("src/assets/images"),
      "@styles": pathResolve("src/styles"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        additionalData: `@use "@styles/base.scss" as *;`,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (checkInfo) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(checkInfo.name!)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(checkInfo.name!)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }

          return "assets/css/[name]-[hash][extname]";
        },
        chunkFileNames: "assets/js/[name]-[hash].js",

        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});
