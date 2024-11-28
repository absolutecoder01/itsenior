import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
  envPrefix: "ENV_",
  server: {
    open: true,
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
