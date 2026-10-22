import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://rubyinghent.org",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [react()],
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
});
