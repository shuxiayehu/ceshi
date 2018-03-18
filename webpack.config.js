const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  if (!env) {
    env = {};
  }

  const plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './app/views/index.html'
    })
  ];
  if (env.production) {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new ExtractTextPlugin('style.min.css'),
      new UglifyJsPlugin({ sourceMap: true })
    );
  }
  return {
    entry: {
      app: ['./app/js/hotcss.js', './app/js/main.js']
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    },
    module: {
      rules: [
        { test: /\.html$/, use: ['html-loader'] },
        { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        {
          test: /\.vue$/,
          use: [{
            loader: 'vue-loader',
            options: {
              cssModules: { localIdentName: '[path][name]---[local]---[hash:base64:5]', camelCase: true },
              loaders: env.production ? {
                css: ExtractTextPlugin.extract({ use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8', fallback: 'vue-style-loader ' }),
                scss: ExtractTextPlugin.extract({ use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8!sass-loader', fallback: 'vue-style-loader' })
              } : {
                css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
                scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
              }
            }
          }]
        }
      ]
    },
    plugins,
    output: { filename: '[name].min.js', path: path.resolve(__dirname, 'dist/') }
  };
};
