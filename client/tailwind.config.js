/ ** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    green: "rgb(var(--brand-green) / <alpha-value>)",
                    blue: "rgb(var(--brand-blue) / <alpha-value>)",
                    gray: "rgb(var(--brand-gray) / <alpha-value>)",
                    white: "rgb(var(--brand-white) / <alpha-value>)",
                }
            },
        },
    },
    plugins: [],
}