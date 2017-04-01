var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');

// config.vue = {
//     loaders: {
//         css: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader' })
//     }
// };

config.plugins = [
    
    // 提取css为单文件
    new webpack.LoaderOptionsPlugin({
         // test: /\.xxx$/, // may apply this only for some modules
         options: {
            vue: {
                loaders: {
                    css: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader' })
                }
            }
         }
    }),
    new ExtractTextPlugin("../[name].[contenthash].css"),

    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    })
];

module.exports = config;