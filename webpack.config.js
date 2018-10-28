const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/vendorOnly.js',
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
    publicPath: '/dist',
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/',
        to: '[path][name].[ext]',
      },
    ]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
    })
  ],

  resolve: {
    extensions: ['.js', '.sass'],
    modules: [path.join(__dirname, './src'), 'node_modules'],
  },
};
