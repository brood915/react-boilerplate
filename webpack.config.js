const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/assets/', 
  },
  module: {
    rules: [
      {
      test: /\.(js|jsx)$/, 
      include: [
          path.resolve(__dirname, "src")
        ],
      use: 'babel-loader'
      }
    ]
  },
  devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 1337
},
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};
