/**
 * Created by haiyanSong on 2017/9/7.
 */

module.exports = {
    devtool: 'eval-source-map', //  默认是source maps

    entry:  __dirname + "/module/importTest/app.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}
