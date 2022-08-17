import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      fileName: (format) => `my-lib.${format}.js`,
      name: "MyLib",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    sourcemap: true,
  },
  plugins: [react()],
});
