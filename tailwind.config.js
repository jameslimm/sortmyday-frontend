import tailwindAnimate from "tailwindcss-animate";
import tailwindReactAria from "tailwindcss-react-aria-components";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [tailwindAnimate, tailwindReactAria],
};
