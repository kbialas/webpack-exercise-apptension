'use strict';
var webpack = require("webpack");
var path = require('path');

var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'main': './src/main.js',
    'unsupported': './src/unsupported.js'
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {test: /\.json$/, loader: "json-loader"},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: extractTextPlugin.extract('css!sass?modules=true!postcss')
      }
    ]

  },
  plugins: [
    new extractTextPlugin('style-[hash].css')
  ]
};
