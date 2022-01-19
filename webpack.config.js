const path = require("path");
const isProductionMode = process.env.NODE_ENV === "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const outputPath = path.resolve(__dirname, "dist");
const publicPath = "/assets/";

const entry = {
  home: ["./src/js/home.js", "./src/styles/home.scss"],
  // account: ['./js/account.js', './styles/account.scss'],
};

const rules = [
  {
    test: /\.(css|scss)$/i,
    use: [
      isProductionMode
        ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath,
            },
          }
        : { loader: "style-loader" },
      { loader: "css-loader" },
      {
        loader: "postcss-loader",
        options: { implementation: require("postcss") },
      },
      { loader: "sass-loader" },
    ],
  },
];

const plugins = [];
if (isProductionMode) {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  );
}

module.exports = {
  entry,
  output: {
    path: outputPath,
  },
  module: {
    rules,
  },
  plugins,
};
