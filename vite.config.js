import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://juai68gp12.execute-api.us-east-1.amazonaws.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/prod"),
        secure: false,
      },
    },
  },
});
