import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  build: {
    outDir: "./dist",
  },

  // server: {
  //     proxy: {
  //     '/api/': {
  //         target: 'http://med.mf.uz/api/web/',
  //         changeOrigin: true,
  //         rewrite: (path) => path.replace(/^\/api/, '')
  //     },
  //     }
  // }
});
