# 目录结构
```
src
    ├─css
    ├─html
    ├─img
    └─js
        └─utils
```


- src:源码目录
    - css: 样式文件
    - html: 页面模板文件
    - img: 图片资源
    - js: 实际代码
        - utils: 工具包
- dist:编译后文件目录(需运行 npm run build 后才会出现)

# 可用脚本
- npm run start: 启动本地测试服务器，并将页面部署上去
- npm run build: 打包项目成静态文件