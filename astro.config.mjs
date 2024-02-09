import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://mikk0git.github.io",
  base: "/frontendmentor.io-room-homepage",
});