import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};

export default config;
