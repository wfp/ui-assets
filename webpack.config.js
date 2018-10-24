const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/vendorOnly.js',
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, './assets'),
    publicPath: '/assets',
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/assets/',
        to: '[path][name].[ext]',
      },
    ]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
    }),
    new ExtractTextPlugin('email/[name].html'),
    new ExtractTextPlugin('css/[name].css'),
  ],

  resolve: {
    extensions: ['.js', '.sass'],
    modules: [path.join(__dirname, './src'), 'node_modules'],
  },
};
