import path from "path";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import webpack from 'webpack';

export default {
  mode: 'development',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'shell.js',
    publicPath: "./",
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        parallel: true,
      }),
    ],
    // splitChunks: {
    //   chunks: 'all',
    //   name: 'vendor',
    // },
  },
  plugins: [
    new Dotenv(),
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'shell.css',
      chunkFilename: 'shell.css',
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
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
              "@babel/preset-typescript",
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
                // localIdentName: '[local]',
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
        include: [
          path.join(__dirname, 'public')
        ],
        loader: 'file',
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
      '~configs': path.resolve(__dirname, 'configs/'),
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
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: '/',
    historyApiFallback: true,
    compress: true,
    port: 4000,
    watchContentBase: true,
    // open: true,
  },
  target: 'web', // only for develomplent
};

