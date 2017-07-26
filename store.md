存储：
cookie sessionStorage localStorage的区别

cookie: 本身用来实现客户端和服务端通信
但是它有本地存储功能

document.cookie = {key: value}
所有和服务端的请求会把cookie带进去

缺点：存储量太小，只有4kb
所有的http请求都要带着，会影响获取资源的效率
API简单，需要封装才能够使用document.cookie = ...


locationStorage和sessionStorage:
最大容量5M
API简单易用
localStorage.setItem(key,value)
getItem(key)

俩个区别：
sessionStorage只要浏览器关闭了，就没有了
localStorage则不会

控制台->application->localStorage

ios safari隐藏模式下，localStorage.getItem会报错
使用try catch封装一下