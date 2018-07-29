// 内置插件
const Path = require("path");
// npm 外部安装插件
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        index: "./src/js/index.jsx",
        browse: "/src/js/browse.jsx"
    },
    output: {
        publicPath: "",
        path: Path.resolve(__dirname, "./dist"),
        filename: "./js/[name]-[chunkhash].js"
    },
    devServer: {
        contentBase: Path.join(__dirname, "./dist"),
        open: true,
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: (loader) => [
                                require("autoprefixer")()
                            ]
                        }
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: (loader) => [
                                require("autoprefixer")()
                            ]
                        }
                    }]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react", "es2015"]
                    }
                }
            }
        ]
    },
    plugins: [
        // new CopyWebpackPlugin([
        //     {from: __dirname + "/src/css/default.css", to: "./"}
        // ]),
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "引导页",
            favicon: "./src/img/icon.ico",
            template: "./src/html/template.html",
            inject: "body",
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: "browse.html",
            title: "浏览页",
            favicon: "./src/img/icon.ico",
            template: "./src/html/template.html",
            inject: "body",
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
};