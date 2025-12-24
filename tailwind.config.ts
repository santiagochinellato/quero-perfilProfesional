import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Paleta principal: Azul Marino + Terracota
                "navy-deep": "#1B3A52",
                "terracota": "#C85A3C",
                "stone-gray": "#6B7280",
                "warm-white": "#FAFAF9",
                "ice-gray": "#F3F4F6",
                
                // Semantic Colors
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",
                "primary-dim": "var(--primary-dim)",
                surface: "var(--surface)",
                border: "var(--border)",
                muted: "var(--muted)",
                accent: "var(--accent)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
                handwritten: ["var(--font-caveat)", "cursive"],
                signature: ["var(--font-holiday)", "cursive"],
            },
        },
    },
    plugins: [],
};
export default config;
