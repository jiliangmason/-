--save-dev: 只有开发环境
--save: 线上&开发环境都依赖

webpack中引入jquery：
npm install jquery --save

index.js
var $ = require('jquery')

代码压缩：
plugins: [new webpack.optimize.UglifyJsPlugin()]

上线：
1. 将测试完成的代码提交到master分支
2. 将当前服务器的代码全部打包并记录版本号，备份
3. 将master提交到服务器，生成新的版本号

回滚：
1. 将当前服务器的代码打包并记录版本号，备份：
2. 将备份的上一个版本号解压，覆盖到线上服务器，并生成新版本

Linux基本命令：
ssh name@server  登陆

head -n 1 a.js 查看
tail -n 2 b.js

grep 'xxx' a.js 文件中搜索