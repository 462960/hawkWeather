const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLwebpackPlugin = require("html-webpack-plugin");
const UglyJS = require("uglify-js-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

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
    new UglyJS({
      compress: {
        warnings: true
      },
      debug: true,
      sourceMap: true // or false. True is not default for WP2
    }),
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
