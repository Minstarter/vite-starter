// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
} from "unocss";
import type { Theme } from "unocss/preset-uno";

import presetIcons from "@unocss/preset-icons";
import presetRemToPx from "@unocss/preset-rem-to-px";
import presetTheme from "unocss-preset-theme";

import { dark, light } from "./src/styles/theme";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,vue}"],
  },
  shortcuts: {
    "flex-center": "flex items-center justify-center",
    "grid-center": "grid place-items-center",
  },
  rules: [
    // [/^w-([\.\d]+)$/, ([_, num]) => ({ width: `${num}px` })],
  ],
  presets: [
    presetAttributify({
      /* preset attributify options */
    }),
    presetIcons({
      /* preset icons options */
    }),
    presetRemToPx({ baseFontSize: 4 }),
    presetTheme<Theme>({ theme: { dark, light } }),
    presetUno(),
  ],
  transformers: [transformerDirectives()],
});
