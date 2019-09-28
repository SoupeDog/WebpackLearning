// 内置插件
const path = require("path");

// 外部插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    entry: {
        index: "./src/js/index.jsx",
    },
    output: {
        publicPath: "",
        path: path.resolve(__dirname, "./dist"),
        filename: "./js/[name]-[chunkhash].js"
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        open: true,
        compress: true,
        port: 9000,
        // host: "192.168.1.105"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/react"],
                            plugins: [
                                [require("@babel/plugin-proposal-decorators"), {"legacy": true}]
                            ]
                        }
                    }
                ],
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: [{loader: "style-loader"}, {loader: "css-loader"}],
                exclude: /node_modules/,
                include: path.resolve(__dirname, "src")
            },
            {
                test: /\.less/,
                use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "less-loader"}],
                exclude: /node_modules/,
                include: path.resolve(__dirname, "src")
            },
            {
                test: /\.scss/,
                use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}],
                exclude: /node_modules/,
                include: path.resolve(__dirname, "src")
            },
            {
                test: /\.(gif|jpg|png|bmp|eot|woff|woff2|ttf|svg)/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1024,
                            outputPath: "images"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            {
                cleanOnceBeforeBuildPatterns: [
                    path.resolve(__dirname, "dist")
                ]
            }
        ),
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "首页",
            favicon: "./src/img/favicon.ico",
            template: "./src/html/template.html",
            inject: "body",
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ],
    optimization: {
        splitChunks: {
            // 打包公共依赖
            chunks: "all",
            name: "commons"
        }
    }
};