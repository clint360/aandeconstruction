/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '500px', // Example: Change the sm breakpoint to 500px
        md: '800px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

