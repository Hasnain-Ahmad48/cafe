/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'earth-dark': '#05110d',
                'earth-overlay': '#14251f',
                'earth-accent': '#a7ddb8',
                'earth-hover': '#354b44',
                'earth-card': '#617c73',
                'earth-card-alt': '#648978',
                'earth-soft': '#7fa989',
                'earth-soft-alt': '#72a292',
                'earth-light': '#f4f1ea',
            },
            fontFamily: {
                // You can add custom fonts here if imported in index.css
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
