// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        fredroka: ["Fredoka", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        madimiOne: ["Madimi One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
