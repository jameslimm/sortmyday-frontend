import tailwindanimate from "tailwindcss-animate";
import tailwindreactaria from "tailwindcss-react-aria-components";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [tailwindanimate, tailwindreactaria],
};
