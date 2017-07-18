一、变量类型和计算：
题目：
1. JS使用typeof得到的类型
2. 使用=== 与 ==的区别
3. JS中有哪些内置函数
4. JS中变量按照存储方式区分为哪些类型，并描述其特点
5. 如何理解JSON

(1). 数值类型和引用类型：
var a = 100;
var b = a;
a = 200
console.log(b) //100

var a = {
    age: 20
}
var b = a;
b.age = 21
console.log(a.age) //21

内存中，值类型中a和b是在独立的内存中; 而引用类型中，a只是把地址给了b（或者说b指向a的存储空间）
a与b指向了同一块内存

引用类型：对象、数组、函数
为何会出现引用这种方式：如果a有很多属性，a占有很大的内存空间，如果完全赋值给b，那么b也会占用很大的空间

typeof undefined -> undefined

typeof null -> object
typeof [] -> object
typeof {} -> object

typeof true -> boolean
typeof 123 -> number
typeof 'abc' -> string

typeof console.log -> function

typeof 只能区分出数值类型，除了函数之外，其他引用类型无法区分

(2). 强制类型转换：
字符串拼接：
var a = 100 + 10;
var b = 100 + '10';

100 == '100'
0 == '' (都转成了false)
null == undefined
都是true

console.log(10 && 0) //0
console.log('' || 'abc') //'abc'
console.log(!window.abc) //window.abc = undefined

var a = 100
console.log(!!a) => 转换成false

if (obj.a == null) {
    //包含了obj.a === undefined & obj.a === null
}

(3). JS中的内置函数：(9个)
Object
Array
Boolean
Number
String
Function
Date
RegExp
Error

(4). 如何理解JSON：
1. 内置对象而已(还有一个Math)
2. 是一种数据格式
3. 掌握2个API: JSON.stringify({a: 10, b: 20})
   JSON.parse('{"a": 10, "b": 20}')

不光是对象可以有属性，函数和数组都可以有属性
function fn() {}
fn.age = 22
var fn1 = fn
fn1.age = 21
fn.age = 21

0 NaN '' null undefined ---> 在if里面会转成false


