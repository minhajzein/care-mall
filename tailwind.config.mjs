/** @type {import('tailwindcss').Config} */
// tailwind.config.mjs
export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ff431a',
                'primary-black': '#050009',
            },
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
            },
            keyframes: {
                'infinite-carousel': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                'infinite-carousel': 'infinite-carousel 10s linear infinite',
            },
        },
    },
    plugins: [],
}
