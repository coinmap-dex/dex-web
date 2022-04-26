import path from "path";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';
// const commonPaths = require('./config/paths');

export default {
  mode: 'production',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'shell.js',
    // chunkFilename: 'shell.chunk.js',
    publicPath: "./",
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        parallel: true,
      }),
    ],
    splitChunks: {
      // chunks: "all",
      cacheGroups: {
        // sezyDesign: {
        //   test: /node_modules\/(sezy-design\/).*/,
        //   name: "sezy-design",
        //   chunks: "all",
        // },
        // vendor: {
        //   name: "vendors",
        //   test: /[\\/]node_modules[\\/]/,
        //   chunks: "all",
        // },
      },
    },
  },
  plugins: [
    new Dotenv(),
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'shell.css',
      chunkFilename: 'shell.css',
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new CopyPlugin({
      patterns: [
        { from: "public", to: "" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/sezy-design")
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript"
            ],
          },
        },
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/sezy-design")
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
              },
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[name]_[hash]',
              runtimeCompat: false,
              prefixize: true,
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false },
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png)$/i,
        loader: 'file-loader',
        options: {
          hash: 'sha512',
          digest: 'hex',
          name: '[hash].[ext]',
        },
      },
      {
        test: /\.ico$/i,
        loader: 'file-loader',
        options: {
          hash: 'sha512',
          digest: 'hex',
          name: 'favicon.ico',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', ".css"],
    alias: {
      '~components': path.resolve(__dirname, 'src/components/'),
      '~pages': path.resolve(__dirname, 'src/pages/'),
      '~store': path.resolve(__dirname, 'src/store/'),
      '~utils': path.resolve(__dirname, 'src/utils/'),
      '~hooks': path.resolve(__dirname, 'src/hooks/index.ts'),
      '~css': path.resolve(__dirname, 'src/css/'),
      '~svg': path.resolve(__dirname, 'src/svg/'),
      '~breakpoints': path.resolve(__dirname, 'src/css/breakpoints.ts'),
    },
    fallback: {
      "stream": false,
      "assert": require.resolve("assert/"),
      "buffer": require.resolve("buffer/"),
      "crypto": require.resolve("crypto-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser")
    },
  },
};

