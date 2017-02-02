let CopyWebpackPlugin = require('copy-webpack-plugin');
let path = require('path');
let webpack = require('webpack');

let env = process.env.NODE_ENV || 'development';

let entry = env != 'development' ? './app/index.js' : [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index.js'
  ];

module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.sass$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.(png|jpg|svg)$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html' }
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true
  }
};
