const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const UglyJS = require("uglifyjs-webpack-plugin");
const HTMLwebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const config = {
  entry: ["babel-polyfill", __dirname + "/dev/index.js"], hgjh
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HTMLwebpackPlugin({
      template: "./dev/index.template.html",
      inject: true
    }),
    new UglyJS({ sourceMap: true }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static"
    }),
    new Dotenv({
      path: "./dev/helpers/.env_prod"
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"],
    alias: {
      Components: path.resolve(__dirname, "dev/components/"),
      Containers: path.resolve(__dirname, "dev/containers/"),
      Helpers: path.resolve(__dirname, "dev/helpers/"),
      Action: path.resolve(__dirname, "dev/action/")
    }
  }
};

module.exports = config;
