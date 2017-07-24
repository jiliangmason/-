1. ajax
手写ajax
跨域的几种实现方式, 原理

XMLHttpRequest
状态码说明
跨域

var xhr = new XMLHttpRequest()
xhr.open('GET', '/api', false)
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            console.log(xhr.responseText)
        }
    }
}
xhr.send(null)
IE兼容性：
ActiveXObject

readyState = 0 还没有send
1 - 已经调用send方法，正在发送请求
2 - send方法执行完成，已经接受到全部相应内容
3 - 正在解析响应内容
4 - 响应内容解析完成，可以在客户端调用了

xhr.status:
2xx: 表示成功处理请求
3xx: 需要重定向，浏览器直接跳转
4xx: 客户端请求错误，如404
5xx: 服务端错误


***********跨域***********

1. 什么是跨域
2. jsonp
3. 服务端设置http header

浏览器的同源策略，不允许ajax访问其他域的接口
跨域条件：
协议、域名、端口、有一个不同就算跨域

有三个标签可以跨域加载资源：
<img src=xxx(其他域地址)>  
打点统计，统计网站可能是其他域

<link href="www.baidu.com">可以使用CDN，CDN也是其他域

<script src="yyy">同样可以使用CDN

(2) JSONP的实现原理：
加载http://coding.m.com/classindex.html的时候
不一定服务器真正有一个classindex.html文件
服务器可以根据请求，动态生成一个文件返回

同理，比如你向一个跨域网站请求一个资源
<script src="http://coding.m.imooc.com/api.js">
返回内容格式callback(数据) (动态生成)

<script>
window.callback = function(data) {
    console.log(data)
}
</script>
<script src="http://coding.m.imooc.com/api.js"></script>

请求外域api，返回一个js的片段，js片段执行这个函数，返回数据


(3) 服务端设置http header
response.setHeader("Access-Control-Allow-Origin", "http://a.com, http://b.com")
response.setHeader("Access-Control-Allow-Headers", "X-Requested-With")
response.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")

//接受跨域cookie
response.setHeader("Access-Control-Allow-Credentials", "true")





