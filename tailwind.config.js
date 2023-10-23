/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#fe7152",
        grayText: "#989aa0",
      },
      backgroundImage: {
        hero: "url('assets/images/Curve Line.svg')",
        card: "url('assets/images/Curve Line1.svg')",
      },
    },
  },
  plugins: [],
};
