# 快速开始

## 目录结构

```
└─src
    ├─html
    ├─image
    ├─style
    └─tsx
        └─page
```

- **src**：源码目录
    - **html**：html 模版
    - **image**：图片等静态资源
    - **style**：样式文件
    - **tsx**：react 语法扩展代码
- **dist**：distribution 的缩写，需要执行 ``package.json`` 中的 ``build`` 命令后出现

## 项目脚本

- ``npm run start:dev``：本地运行
- ``npm run build``：项目打包

# 搭建过程

**node 环境我就不多提了，得先准备好(可以使用 npm 命令即可)**

## 必要依赖

```
// 创建 package.json   一路回车，如果有什么想配置的自行补充
npm init

// 安装 typescript
npm install typescript --save-dev

// 创建 typescript 配置文件
tsc --init

// 安装 webpack
npm install webpack webpack-cli webpack-dev-server --save-dev

// 安装 react 相关组件
npm install @types/react @types/react-dom react-router-dom --save-dev

// 安装 babel
npm install babel-loader @babel/preset-env @babel/preset-react @babel/preset-typescript --save-dev

// 安装各种 css loader
npm install css-loader style-loader sass sass-loader less less-loader --save-dev

// 安装实用插件
npm install html-webpack-plugin webpack-bundle-analyzer compression-webpack-plugin clean-webpack-plugin --save-dev

```

### 其他工具推荐

```
// 好用的 js 音乐播放器
npm install aplayer

// 多条件合并返回 true false 工具
npm install clsx

// querystring 工具
npm install qs --save-dev

// antd
npm install antd

// md 编辑工具
npm install vditor

// http 请求工具
npm install axios

// 移动端调试工具
npm install vconsole

// 安装 jquery
npm install jquery @types/jquery --save-dev
```

## 配置 webpack

项目目录下创建 ``webpack.config.js`` 文件

```
// 内置插件
const path = require("path");// 安全拼接 baseURL 与 path 的工具
// 外部插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // 指定下列依赖从远端获取，不打包进 .js 文件
    externals: {
        // "react": "React",
        // "react-dom": "ReactDOM"
        // "vditor": "Vditor"
    },
    // 添加需要解析的文件格式(import 时不需要再标注下列尾缀)
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    mode: 'development', // development,production
    devtool: 'eval-source-map',
    //入口文件的路径(可配多个，此处只配置了 "index" 实体)
    entry: {
        index: "./src/tsx/index.tsx"
    },
    output: {
        path: path.join(__dirname, "/dist"),// distribution 的缩写
        filename: "./js/[name]-[chunkhash].js"
    },
    devServer: {
        // static: path.join(__dirname,"/src/html"),// html 页面不是动态生成，想指定特定目录作为 root 的话
        historyApiFallback: true,
        compress: true,
        open: true,
        port: 9000,
        // host: "192.168.18.12"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                    ]
                }
            },
            {
                test: /\.css?$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ],
                // exclude: /node_modules/,
                // include: path.resolve(__dirname, "src")
            },
            {
                test: /\.less?$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ],
                // exclude: /node_modules/,
                // include: path.resolve(__dirname, "src")
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    {loader: "style-loader"},
                    // Translates CSS into CommonJS
                    {loader: "css-loader"},
                    // Compiles Sass to CSS
                    {loader: "sass-loader"},
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            {
                cleanOnceBeforeBuildPatterns: [
                    path.join(__dirname, "./dist")
                ]
            }
        ),
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "主页",
            favicon: "./src/image/favicon.ico",
            template: "./src/html/defaultTemplate.html",
            chunks: ["index", "commons"],
            inject: "body",
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new CompressionPlugin({
            algorithm: 'gzip', // 类型
            test: /\.(js|css)$/, // 匹配规则
            threshold: 10240, // 字节数 只处理比这个大的资源
            minRatio: 0.8 // 压缩率 只有比这个小的才会处理
        }),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        splitChunks: {
            // 打包公共依赖
            // chunks: "all",
            // name: "commons"
        }
    }
}
```

# 参考资料

[TypeScript 官网](https://www.typescriptlang.org/)

[webpack 官网](https://webpack.js.org/)

[babel 官网](https://babeljs.io/docs/)

[React 官网](https://react.dev/)

[React 官网(中文)](https://zh-hans.react.dev/)

[React Router 官网](https://reactrouter.com/en/main)
