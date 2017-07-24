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

3. 所有的引用类型(数组, 对象, 函数), 都有一个_proto_属性，属性值是一个普通的对象

所有的函数，都有一个prototype属性(显式原型)，属性值也是一个普通对象

所有引用类型，_proto_属性值指向它的构造函数的'prototype'属性值 (就是完全相等===)

当试图得到一个对象的某个属性时，如果这个对象本身没有属性，那么会去
它的_proto_里面去找

例子：function Foo(name, age) {
    this.name = name
}

Foo.prototype.alertName = function() {
    alert(this.name) //这里的this就是f
}

var f = new Foo('zhangsan')
f.printName = function() {
    console.log(this.name)
}

f.printName()
f.alertName()
f.toString()

f本身有一个name属性，后面为其添加了一个printName属性，
而this就是f

f.alertName 先找自己没有，然后到它的_proto_也就是Foo.prototype
上去找，然后就找到了

f.toString 先找自身没找到，再找Foo.prototype也没有，然后通过Foo.prototype._proto_
找到Object.prototype,最后在Object.prototype下找到toString

例子：
var item
for (item in f)
{
    if (f.hasOwnProperty(item)) {
        console.log(item)
    }
}
确保它不是来自原型的属性

f instanceof Foo = true
f沿着_proto_向上找能否找到Foo.prototype
同理
f instanceof Object = true

4. 几个问题:
var arr = []
arr instanceof Array -> true
typeof arr -> object


写一个原型继承的例子:
function Animal() {
    this.eat = function() {
        console.log('animal')
    }
}

function Dog() {
    this.bark = function() {
        console.log('bark')
    }
}

Dog.prototype = new Animal()
new Animal返回一个Animal对象，
把这个对象赋址给Dog.prototype
因此，Dog.prototype下面也有了eat方法

var dog = new Dog()
dog.eat() //animal

实例，见code/prototype.js