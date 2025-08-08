/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dropup: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '40%': { transform: 'translateY(-20px)', opacity: '1' },
          '60%': { transform: 'translateY(10px)' },
          '80%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        dropup:'dropup 1.2s ease-in-out', 
      },
    },
  },
  plugins: [],
}