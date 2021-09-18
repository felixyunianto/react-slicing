module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      mobile: "320px",
      // => @media (min-width: 320px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#F5F6F8",
        secondary: "#080C1C",
        third: "#E9F0F7",
      }),
      borderColor: (theme) => ({
        ...theme("colors"),
        primary: "#F5F6F8",
        secondary: "#080C1C",
        third: "#E9F0F7",
      }),
      textColor: (theme) => theme("colors"),
      textColor: {
        primary: "#F5F6F8",
        secondary: "#080C1C",
        third: "#E9F0F7",
      },
      boxShadow: {
        left : '-7px 0px 5px -2px rgba(0,0,0,0.5)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
