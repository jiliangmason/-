原型和原型链:
1. 如何准确判断一个变量是数组类型
2. 写一个原型链继承的例子
3. 描述new一个对象的过程
4. zepto(其他框架)如何使用原型链

知识点：
1. 构造函数：
function Foo(name, age) {
    this.name = name
    this.age = age
    this.class = 'class-1'
    
    return this //默认有这一行
}

var f = new Foo('zhangyaxiong', 20)
var f1 = new Foo('LI', 22)

new是怎么执行的呢？
(1). this变成空对象
(2). 添加各个属性，给属性赋值
(3). 返回this

2. 构造函数扩展
(1). var a={} 其实是 var a = new Object()
(2). var a=[] 其实是var a = new Array()
(3). function Foo() {...} 其实是var Foo = new Function(...)

变量 instanceof Array