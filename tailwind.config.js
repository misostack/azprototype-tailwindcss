module.exports = {
  purge: ["./src/*.html", "./src/**/*.html", "./docs/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#42a5f5",
      },
      fontFamily: {
        body: ["arial"],
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
