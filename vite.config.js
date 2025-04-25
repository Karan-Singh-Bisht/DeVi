import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^framer-motion(\/.*)?$/,
        replacement: path.resolve(__dirname, "node_modules/framer-motion"),
      },
    ],
    dedupe: ["framer-motion"],
  },
  optimizeDeps: {
    include: ["framer-motion"],
  },
});
