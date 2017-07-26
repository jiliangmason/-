一、异步和单线程：
1. console.log(100)
setTimeout(function() {
    console.log(200)
}, 1000)
console.log(300)

=> 100 300 200
同步和异步区别在于：是否阻塞了程序运行

何时需要异步：
在可能发生等待的情况:
等待过程中不能alert一样卡在那里

定时任务：
setTimeout，setInterval
网络请求：ajax请求(请求过程，其他任务该干嘛干嘛)， 动态<img>加载
事件绑定
(1) ajax
console.log('start')
$.get('./data1.json', function(data1){
    console.log(data1)
})
console.log('end')

start -> end -> data1

(2) 动态加载图片
console.log('start')
var img = document.createElement('img')
img.onload = function() {
    console.log('loaded')
}
img.src = '/xxx.png'
console.log('end')

start -> end -> loaded