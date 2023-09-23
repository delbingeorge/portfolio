/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // "dark-mode-primary": "#222222",
                "dark-mode-primary": "#131313",
                // "dark-mode-secondary": "#2a2a2a",
                "dark-mode-secondary": "#1e1f21",
                "dark-mode-accent": "#e3e3e3",
                "light-mode-primary": "#cccccc",
                "light-mode-secondary": "#c5c5c5",
                "light-mode-accent": "#222222",
            },
            fontFamily: {
                inter: ["Inter Tight", "sans-serif"],
                "mono-space": ["Space Mono", "monospace"],
            },
            backgroundImage: {
                eatables: "url(./assets/images/eatablesMore.webp)",
                qikfixer: "url(./assets/images/qikfixerBg.webp)",
                extratime: "url(./assets/images/extratimeBg.webp)",
                "read-more": "url(./assets/images/MoreProjects.webp)",
            },
            cursor: {
                custom: "url(./assets/images/cursor.png), auto",
            },
        },
    },
    plugins: [],
};
