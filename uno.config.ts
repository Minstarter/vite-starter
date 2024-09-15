// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
} from "unocss";

import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
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
    presetRemToPx({ baseFontSize: 4 }),
    presetUno(),
  ],
  transformers: [transformerDirectives()],
});
