/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chivo: ["Chivo"],
        Urbanist: ["Urbanist"],
      },
      colors: {
        primaryDark: "#0E100F",
        primaryGray: "#E1DFDD",
      },
    },
  },
  plugins: [],
};
