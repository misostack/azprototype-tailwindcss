module.exports = {
  purge: ["./src/*.html", "./src/**/*.html", "./docs/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#90cf43",
      },
      fontFamily: {
        body: ["arial"],
        heading: ["'Merriweather', serif"],
      },
      textColor: {
        primary: "#90cf43",
      },
      backgroundColor: {
        primary: "#8cc43d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
