// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        rotateWords: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-49vw)" }, // 6 × 100% for 7 words
        },
      },
      animation: {
        // "rotate-words": "rotateWords 20s steps(7) infinite",
        "rotate-words": "rotateWords 12s steps(7) infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        fredroka: ["Fredoka", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        madimiOne: ["Madimi One", "sans-serif"],
        detoks: ["detoks", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
