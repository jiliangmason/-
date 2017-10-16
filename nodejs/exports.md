const exports = module.exports;

exports = {
    a: 1,
    b: 2,
    test: funcion() {} //拿不到test
};

这种情况下:
module.exports = {
    a: 1,
    b: 2
}

exports可以向它添加属性，而不是改变它指向

global全局对象：
mod.js
const testVar = 1000;

module.exports.testVar = testVar;

另一个文件abc.js
const mod = require('./mod')
console.log(mod.testVar) //生效
console.log(testVar) //不生效

如果mod.js：
global.testVar2 = 200

abc.js:
console.log(testVar2) //200

process进程：
1. 常用的
const {argv, argv0, execArgv, execPath} = process;
argv.forEach(item => {})

node --inspect 10_argv.js
execArgv: [--inspect]

execPath:调用它的路经
=argv输出的第一个参数

2.环境
const {env} = process
执行环境

process.cwd() //打印出当前命令执行路径
 = pwd
 
setImmediate(function() {})
等下一个事件队列，同步的执行完了才执行它

process.nextTick(() => {})
与上面一个的区别，比上面执行的早优先级更高

setTimeout(() => {}, 0)
next -> setTimeout -> setImmediate

大部分用setImmediate