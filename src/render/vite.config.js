import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  assetsInclude: ['*.svg', '*.bin', '*.json'],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react()],
});
