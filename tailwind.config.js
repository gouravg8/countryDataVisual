/** @type {import('tailwindcss').Config} */
export const content = ["./dist/**/*.{html,js}"];
export const theme = {
  extend: {
    // that is animation class
    animation: {
      fade: "fadeInLeft 1s ease-in",
    },

    // that is actual animation
    keyframes: (theme) => ({
      // fadeOut: {
      //   "0%": { marginRight: "3vh" },
      //   "100%": { marginRight: "0vh" },
      // },
      fadeInLeft: {
        "0%": {
          opacity: "0",
          transform: 'translateX(-20px)',
        },
        "100%": {
          opacity: "1",
          transform: 'translateX(0)',
        },
      },
    }),
  },
};
export const plugins = [];
