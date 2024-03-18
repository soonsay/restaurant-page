const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry: {
    app: './src/index.js',
  },

  plugins: [

    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],

  output: {

    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Development',
      file: 'index.html',
      inject: 'body',
      // scriptLoading: 'defer',
    
    })
  ],
  entry: {
    index: './src/index.js',
    test: './src/home.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
