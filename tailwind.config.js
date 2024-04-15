/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-botleft-to-topright':
                    'linear-gradient(15deg, var(--tw-gradient-stops))',
                cscountryclub:
                    "url('/src/assets/images/calabasas-country-club-home-photo.jpg')",
            },
        },
    },
    plugins: [],
}
