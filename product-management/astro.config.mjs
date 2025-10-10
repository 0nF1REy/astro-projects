import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

/** @type {import('astro/config').AstroUserConfig} */
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [/** @type {import('vite').PluginOption} */ (tailwindcss())],
  },
});
