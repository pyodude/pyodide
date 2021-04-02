const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development'
  , entry: {
    index: './index.js'
  }
  , devServer: {
    contentBase: './build/'
  }
  , plugins: [
    new HtmlWebpackPlugin({ template: './build/console.html' })
  ]
};
