/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cscountryclub:
          "url('/src/assets/images/calabasas-country-club-home-photo.jpg')",
      },
    },
  },
  plugins: [],
};
