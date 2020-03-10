const path = require('path');

module.exports = {
  entry: './src/app.js', // relative path
  output: {
    path: path.join(__dirname, 'public'), // absolute path
    filename: 'bundle.js' // file name
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [
                  {loader: 'babel-loader'}
                ]
          },
          { test: /\.css$/,
            exclude: /node_modules/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' }
            ]
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          }
      ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};

