/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "roboto",
      },
    },
    screens: {
      xs: "350px",
      sm: "450px",
      md: "500px",
      lg: "768px",
      xl: "1000px",
      xxl: "1200px",
    },
  },
  plugins: [],
};
