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
                "light-mode-primary": "#ffffff",
                // "light-mode-primary": "#cccccc",
                // "light-mode-secondary": "#c5c5c5",
                "light-mode-secondary": "#f5f5f5",
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
                "article-not-found":
                    "linear-gradient(to top, black,rgb(0,0,0,0.4)),url(https://images.unsplash.com/photo-1641545423876-3d7dc842132c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80)",
            },
            cursor: {
                custom: "url(./assets/images/cursor.png), auto",
                hover: "url(./assets/images/hover-cursor.png), auto",
            },
        },
    },
    plugins: [],
};
