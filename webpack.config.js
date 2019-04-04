var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode : 'production',
  devtool: 'eval',
  entry: [ 'webpack-dev-server/client?http://localhost:3000','./src/index' ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  performance: { hints: false },
    
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src'),
    publicPath: '/static/'  
  }
};
