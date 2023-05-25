/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        smart: "0 1px 1px rgba(35,35,35,1)",
      },
      textColor: {
        neutralBlack: "#232323",
        neutralGray: "#626262",
        neutralRed: "#F15524",
      },
      colors: {
        neutralBlack: "#232323",
        neutralGray: "#626262",
        lightGray: "#B5C0C7",
      },
    },
    fontFamily: {
      bpg: "bpg-arial",
    },
  },
  plugins: [],
};
