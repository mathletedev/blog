import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://mathletedev.github.io",
	integrations: [
		react(),
		tailwind({
			config: {
				path: "tailwind.config.js",
				applyBaseStyles: false
			}
		}),
		prefetch(),
		sitemap()
	]
});
