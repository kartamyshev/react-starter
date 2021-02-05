const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          query: {
            ignoreDiagnostics: [2339, 1238]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new TSLintPlugin({
      files: ['./src/**/*.ts']
    }),
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify('http://localhost:3000'),
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@css': path.resolve(__dirname, 'src', 'css'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@stores': path.resolve(__dirname, 'src', 'stores'),
      '@hooks': path.resolve(__dirname, 'src', 'hooks')
    }
  }
};
