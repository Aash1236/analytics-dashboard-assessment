/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "	#4a7ba6",
        secondary: "#CCC7BF",
        accent: "#EDEEEB",
        toothpaste: "	#c2c3ff",
        pastle: "#c9ffc7",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
