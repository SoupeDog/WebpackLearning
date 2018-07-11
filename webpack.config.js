// 内置插件
const path = require('path');
// npm 外部安装插件
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        index: './src/js/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        open: true,
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }, {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015']
                }
            }
        }]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: __dirname + '/src/html', to: './'}
        ])
    ]
};