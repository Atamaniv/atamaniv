var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    moduleDirectories:['node_modules'],
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    loaders: [
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: "awesome-typescript-loader"
        },
      ],
      include: path.join(__dirname, 'src')
    },
    {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    }]
  }
};


