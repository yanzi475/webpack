
'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:   "./app.js",
    output: {

        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            }

        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "module/importTest"),//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        compress: true,
        port: 8090
    }




}