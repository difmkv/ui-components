var webpack = require("webpack");

module.exports = {
  devtool: "eval",
  entry: ["./index.js"],
  output: {
    path: __dirname + "/build",
    filename: "main.js",
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /.js$/,
        loaders: ["react-hot", "babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /.jsx?$/,
        loaders: ["react-hot", "babel-loader"],
        exclude: /node_modules/,
      },
      { test: /.svg$/, loader: "raw" },
      { test: /.css$/, loader: "style-loader!css-loader" },
      {
        test: /.(eot|svg|ttf|woff|woff2)$/,
        loader: "file?name=src/css/[name].[ext]",
      },
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};
