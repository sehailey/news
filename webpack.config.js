const path = require('path')

module.exports = {
  entry: [
    '@babel/polyfill', // enables async-await
    './index.js'
  ],

  output: {
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
}
