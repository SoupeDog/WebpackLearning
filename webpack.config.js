const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js'
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
    }
};