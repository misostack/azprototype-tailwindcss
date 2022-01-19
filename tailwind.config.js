module.exports = {
  purge: ["./src/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#42a5f5",
      },
      fontFamily: {
        body: ["Open Sans"],
      },
      backgroundColor: {
        primary: "#1976d2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
