闭包：
1. 执行上下文(预解析):
console.log(a)  //'undefined'
var a = 100

fn('zhang')  //'zhang' 20
function fn(name) {
    age = 20;
    console.log(name, age)
    var age
}

范围：一段<script>或者一个函数
全局：变量定义，函数声明  一段<script> 都具有预解析的功能
函数：变量定义，函数声明，this，arguments 都具有预解析的功能

function fn(name) {
    console.log(this)
    console.log(arguments)
    //这两个在执行之前，就已经确定好值了
}

2. 关于this:
要执行时才能确认，定义时无法确认
例子：
var a = {
    name: 'A',
    fn: function() {
        console.log(this.name)
    }
}

a.fn() //this === a
a.fn.call({name: 'B'}) //this === {name: 'B'}
var fn1 = a.fn
fn1()  //this === window

(1).作为构造函数执行
构造函数中的this == new出来的对象

(2).作为对象属性执行
上面的a.fn() this == a

(3).作为普通函数执行
function fn() {
    console.log(this)
}
fn()  //window

(4).call apply bind
function fn1(name, age) {
    console.log(this)
}
fn1.call({x: 100}, 'zhang', 20)

var fn2 = function (name, age) {
    console.log(this)
}.bind({x: 100})  //这里必须使用函数表达式的方法
fn2('zhang', 20)

3. 作用域：对于某一个变量或者方法具有访问权限的范围
函数在哪里定义，它的父级作用域就在哪里
作用域链：一个自由变量向外面找，直到全局而形成的链式结构。

闭包：
function F1() {
    var a = 100 //私有的
    return function() {
        console.log(a)  //a是一个自由变量，
        //自由变量应该到定义的作用域中去找而不是在执行它的作用域中去找
    }
}

var f1 = F1()
var a = 200
f1()

闭包使用的场景：
(1) 函数作为返回值
(2) 函数作为参数传递
function F1() {
    var a = 100
    return function() {
        console.log(a)
    }
}

var f1 = F1()
function F2(fn) {
    var a = 200
    fn();
}

F2(f1) //输出a=100;  
自由变量a会在定义它的父级作用域中查找，而不是在执行的父级作用域查找

