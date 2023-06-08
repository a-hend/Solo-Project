const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output:{
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/, // files with .js or .jsx
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },  
      },
      {
        test: /.(css|scss)$/, // does not account for sass
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            // loads files as base64 encoded data url if image file is less than set limit
            loader: 'url-loader',
            options: {
              // if file is greater than the limit (bytes), file-loader is used as fallback
              limit: 100000,
            },
          },
        ],
      },
    ],
  },
  plugins: [ new HtmlWebpackPlugin({
    title: 'Development',
    template: './client/index.html'
    }),
  ],
  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, 'build')
    },
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  resolve: { // not sure why this isn't working
    extensions: ['','.js','.jsx'],
  },
};