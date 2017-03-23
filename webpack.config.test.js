var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    root: [path.resolve('./app')]
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.sass$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.(png|jpg|svg)$/, loader: 'file-loader' }
    ]
  }
};
