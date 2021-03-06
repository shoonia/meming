'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const miniCSSClassName = require('mini-css-class-name/css-loader');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);
const localIdent = miniCSSClassName();

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {},
    },
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
          require('css-mqpacker')({
            sort: true,
          }),
        ],
        sourceMap: false,
      },
    },
  ];
  if (preProcessor) {
    loaders.push({
      loader: require.resolve(preProcessor),
      options: {
        sourceMap: false,
      },
    });
  }
  return loaders;
};

module.exports = {
  mode: 'production',
  bail: true,
  devtool: false,
  entry: [paths.appIndexJs],
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].[chunkhash:4].js',
    chunkFilename: 'static/js/[name].[chunkhash:4].chunk.js',
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: info =>
      path
        .relative(paths.appSrc, info.absoluteResourcePath)
        .replace(/\\/g, '/'),
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          module: true,
          toplevel: true,
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 8,
            warnings: false,
            comparisons: false,
            inline: 2,
            drop_console: true,
            passes: 3,
            unsafe_methods: true,
            module: true,
            toplevel: true,
            pure_getters: true,
            unsafe: true,
            unsafe_math: true,
          },
          output: {
            ecma: 8,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: safePostCssParser,
          map: false,
        },
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
                removeAllButFirst: true,
              },
            },
          ],
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    runtimeChunk: false,
  },
  resolve: {
    modules: ['node_modules'].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: paths.moduleFileExtensions.map(ext => `.${ext}`),
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        test: /\.(js|mjs|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: require.resolve('react-dev-utils/eslintFormatter'),
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:4].[ext]',
            },
          },
          {
            test: /\.(js|mjs|jsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve('babel-preset-react-app/webpack-overrides'),
              cacheDirectory: true,
              cacheCompression: true,
              compact: true,
            },
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                [
                  require.resolve('babel-preset-react-app/dependencies'),
                  { helpers: true },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: true,
              sourceMaps: false,
            },
          },
          {
            test: /\.css$/,
            exclude: /\.module\.css$/,
            loader: getStyleLoaders({
              importLoaders: 1,
              sourceMap: false,
            }),
            sideEffects: true,
          },
          {
            test: /\.module\.css$/,
            loader: getStyleLoaders({
              importLoaders: 1,
              sourceMap: false,
              modules: {
                getLocalIdent: localIdent,
              },
            }),
          },
          {
            test: /\.(scss|sass)$/,
            exclude: /\.module\.(scss|sass)$/,
            loader: getStyleLoaders(
              {
                importLoaders: 2,
                sourceMap: false,
              },
              'sass-loader'
            ),
            sideEffects: true,
          },
          {
            test: /\.module\.(scss|sass)$/,
            loader: getStyleLoaders(
              {
                importLoaders: 2,
                sourceMap: false,
                modules: {
                  getLocalIdent: localIdent,
                },
              },
              'sass-loader'
            ),
          },
          {
            test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
              loader: require.resolve('url-loader'),
              options: {
                mimetype: 'application/font-woff',
                limit: 10000,
              },
            }],
          },
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|mjs|jsx)$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:4].[ext]',
            },
          },
          // ** STOP ** Are you adding a new loader?
          // Make sure to add the new loader(s) before the "file" loader.
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      fileBlacklist: [/\.map$/],
      include: ['main', 'Aside'],
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    new ModuleNotFoundPlugin(paths.appPath),
    new webpack.DefinePlugin(env.stringified),
    new MiniCssExtractPlugin({
      filename: 'static/css/styles.[contenthash:4].css',
      chunkFilename: 'static/css/[name].[contenthash:4].chunk.css',
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: publicPath,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      exclude: [/\.map$/, /asset-manifest\.json$/],
      importWorkboxFrom: 'cdn',
      navigateFallback: publicUrl + '/index.html',
      navigateFallbackBlacklist: [
        new RegExp('^/_'),
        new RegExp('/[^/]+\\.[^/]+$'),
      ],
    }),
  ].filter(Boolean),
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: false,
};
