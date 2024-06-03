/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["src/**/*.{astro,svelte,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: "Victor Mono"
            }
        }
    },
    plugins: [
        require("@catppuccin/tailwindcss")({
            defaultFlavour: "mocha"
        })
    ]
};
