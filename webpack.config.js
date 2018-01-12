const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLwebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");

const config = {
  entry: ["babel-polyfill", __dirname + "/dev/index.js"],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader?sourceMap!", "sass-loader?sourceMap!"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "styles.css",
      disable: false,
      allChunks: true
    }),
    new HTMLwebpackPlugin({
      template: "./dev/index.template.html",
      inject: true
    }),
    new Dotenv({
      path: "./.env"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"],
    alias: {
      Components: path.resolve(__dirname, "dev/components/"),
      Containers: path.resolve(__dirname, "dev/containers/"),
      Helpers: path.resolve(__dirname, "dev/helpers/"),
      Action: path.resolve(__dirname, "dev/action/")
    }
  },

  devServer: {
    compress: false,
    port: 9909
  }
};

module.exports = config;
