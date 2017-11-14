const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      { test: /\.(js)$/, use: 'babel-loader'},
      { test: /\.(jsx)$/, use: 'babel-loader'},
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/ ,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
