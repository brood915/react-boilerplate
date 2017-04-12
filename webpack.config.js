// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: __dirname + '/app/index.html',
//     filename: 'index.html',
//     inject: 'body'
// });


// module.exports = {
//     entry: [
//         './app/index.js'
//     ],
//     output: {
//         path: __dirname + '/dist',
//         filename: 'index_bundle.js'
//     },
//     module: {
//         loaders: [
//             {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" } 
//         ]
//     },
//     plugins: [HtmlWebpackPluginConfig],
//     watch:true
// }

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
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
