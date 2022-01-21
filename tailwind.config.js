module.exports = {
  purge: ["./src/*.html", "./src/**/*.html", "./docs/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3b9f3e",
      },
      fontFamily: {
        body: ["arial"],
        heading: ["'Merriweather', serif"],
      },
      textColor: {
        primary: "#3b9f3e",
      },
      backgroundColor: {
        primary: "#40b442",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
