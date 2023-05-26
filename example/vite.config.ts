import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Iconfont from "vite-plugin-iconfont";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Iconfont({
      // url: "//at.alicdn.com/t/c/font_3440485_sjvdwyillne.js",
      url:"//at.alicdn.com/t/c/font_2406373_y1qirr71rlo.js",
      distUrl:'./public/iconfont/iconfont.js',
      // iconJson: './public/iconfont.json',
      dts: "./src/types/iconfont.d.ts",
      inject: false,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
