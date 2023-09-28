/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "dark-mode-primary": "#131313",
                "dark-mode-secondary": "#1e1f21",
                "dark-mode-accent": "#e3e3e3",
                "light-mode-primary": "#ffffff",
                "light-mode-secondary": "#ECECEC",
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
                // "error-page": "linear-gradient(to top, rgb(0,0,0,0.4),rgb(0,0,0,0.4)),url(./assets/images/PageNotFoundImage.webp)",
                portfoilo: "url(./assets/images/portfolio.webp)",
                buswatch: "url(./assets/images/buswatch.png)",
            },
            cursor: {
                custom: "url(./assets/images/cursor.png), auto",
                hover: "url(./assets/images/hover-cursor.png), auto",
            },
        },
    },
    plugins: [],
};
