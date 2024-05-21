import alpinejs from "@astrojs/alpinejs";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import keystatic from "@keystatic/astro";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://blueopenblog.vercel.app/",
  output: "hybrid",
  adapter: vercel(),
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  integrations: [
    alpinejs(),
    keystatic(),
    markdoc({ allowHTML: true }),
    pagefind(),
    react(),
    sitemap(),
    tailwind(),
  ],
});
