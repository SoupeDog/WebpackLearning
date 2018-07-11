const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        index: './src/js/index.js'
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
    plugins: [
        new CopyWebpackPlugin([
            {from:'./src/html', to: './'}
        ])
    ]
};