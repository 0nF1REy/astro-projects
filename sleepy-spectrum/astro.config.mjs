// @ts-check
import cloudflare from "@astrojs/cloudflare";
import clerk from "@clerk/astro";
import { defineConfig } from "astro/config";

import { ptBR } from "@clerk/localizations";

import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    clerk({
      appearance: {
        cssLayerName: "clerk",
      },
      localization: ptBR,
    }),
    react(),
    svelte(),
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    ssr: {},
    plugins: [tailwindcss()],
  },
  output: "server",
});
