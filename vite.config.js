import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "assets/dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "src/js/main.js",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
