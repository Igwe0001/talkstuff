/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueButton: "#EF6924",
        textBlue: "#EF6924",
        textGrey: "#717377",
        textButton: "#525866",
        outlineButton: "#E2E4E9",
        heroBg: "#FCFCFC",
        lightGreen: "#F0FAF6",
        green: "#53C693",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
