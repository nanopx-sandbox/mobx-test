const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      'react-hot-loader/patch',
      'app.js',
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    // publicPath: '/public/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loaders: ['react-hot-loader/webpack', 'babel-loader']
      },
    ],
  },
  devtool: 'source-map',
  target: 'web',
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: [ '.js', '.json', '.jsx' ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    host: '0.0.0.0',
    port: 8000,
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
