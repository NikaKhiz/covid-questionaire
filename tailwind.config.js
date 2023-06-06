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
        neutralBlue: "#208298",
        lightBlue: "#1289AE",
      },
      colors: {
        neutralBlack: "#232323",
        neutralGray: "#626262",
        lightGray: "#B5C0C7",
        neutralBlue: "#208298",
      },
      maxHeight: {
        70: "700px",
        75: "750px",
      },
      minHeight: {
        80: "800px",
      },
      width: {
        500: "500px",
      },
      maxWidth: {
        50: "500px",
        60: "600px",
        70: "700px",
        80: "800px",
      },
      spacing: {
        shadow: "1px",
        "1/10": "10%",
        "1/20": "20%",
        "1/30": "30%",
        "1/40": "40%",
      },
      transitionProperty: {
        opacity: "opacity",
      },
      transitionDuration: {
        500: "500ms",
        1000: "1000ms",
      },
      transitionDelay: {
        500: "500ms",
        200: "200ms",
      },
      scale: {
        2: "2.0",
      },
      borderRadius: {
        medium: "40px",
      },
    },
    fontFamily: {
      bpg: "bpg-arial",
    },
  },
  plugins: [],
};
