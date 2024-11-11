/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueButton: "#008dcb",
        textBlue: "#007DD6",
        textGrey: "#717377",
        textButton: "#525866",
        outlineButton: "#E2E4E9",
        heroBg: "#FCFCFC",
        lightGreen: "#F0FAF6",
        green: "#53C693",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Define Inter with a unique name
        nunito: ["Nunito Sans", "sans-serif"], // Define Nunito Sans with a unique name
      },
    },
  },
  plugins: [],
};
