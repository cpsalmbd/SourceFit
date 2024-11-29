/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.tsx",
      flowbite.content()
    ],
    theme: {
      extend: {},
    },
    plugins: [flowbite.plugin()],
  }
