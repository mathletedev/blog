import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";

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
        sitemap(),
        mdx()
    ],
    markdown: {
        remarkPlugins: [remarkReadingTime],
        shikiConfig: {
            theme: "catppuccin-mocha"
        }
    }
});
