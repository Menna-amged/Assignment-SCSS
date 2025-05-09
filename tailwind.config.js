/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      // screens: {
      //   s: "350px",
      // },
    },
  },
  plugins: [require("flowbite/plugin")],
};

