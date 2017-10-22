/**
 * Created by Administrator on 2017/10/22 0022.
 */
const {normalize} = require('normalize');
normalize('/user//local/bin'); //规范路径

const {join} = require('path');
console.log(join('/usr', 'local', '/bin'));
//拼接路径 /usr/local/bin

const {resolve} = require('path');
console.log(resolve('./'));
//当前路径解析成绝对路径

const {basename, dirname, extname} = require('path');
const filePath = '/user/local/bin/test.txt';
console.log(basename(filePath)); // test.txt
console.log(dirname(filePath)); // /user/local/bin
console.log(extname(filePath)); // .txt 拓展名字

const {parse, format} = require('path');
const filePath = '/user/local/node_modules/n/package.js'
const ret = parse(filePath); //分析路径
const path = format(ret); //  变回来到字符串形式

console.log(ret);
//ret: {
// root, dir, base, ext, name
// }

/*********************操作系统相关**************/
console.log('__dirname', __dirname);
console.log('', process.cwd());
console.log();
//__dirname __filename 绝对路径
//process.cwd() 总是node命令执行的文件所在位置
