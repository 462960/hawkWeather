
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const UglyJS = require('uglify-js-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
     entry: __dirname + '/dev/index.js',
    output: {
      path: __dirname +  '/dist',
      filename: 'bundle.js'
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, 
                use: 'babel-loader'
          },
          {
            test: /\.scss$/,
            exclude: /(node_modules|bower_components)/,
            use: [
            'style-loader',
            'css-loader',
            'sass-loader'
            ]
           },
         ]
    },
       plugins: [
     // new ExtractTextPlugin({filename: 'dist/styles/styles.css', allChunks: true}), 
      new HTMLwebpackPlugin({
        template: './dev/index.template.html',
        inject: true
      }),
       new UglyJS({
      compress: {warnings: true},
      debug: true,
      sourceMap: true // or false. True is not default for WP2
     }),
        new BundleAnalyzerPlugin({
       analyzerMode: 'static'
     })
    ],
    resolve: {
      extensions: ['.js','.jsx','.css', '.scss']
    }
};

module.exports = config;

