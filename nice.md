性能优化：
1. 原则：
多使用内存和缓存
减少CPU计算和减少网络

2. 
(1) 加载页面和静态资源
-> 静态资源的压缩合并(构建工具合并)
形如：<script src='a.js'></script>
<script src='b.js'></script>
<script src='c.js'></script>
合并=><script src='abc.js'></script>求只请求一次了


-> 静态资源缓存
通过链接名称控制缓存
<script src="abc_v1.js"></script>
只有内容改变的时候，链接名称才会改变
<script src='abc_v2.js'>


-> 使用CDN让资源加载更快一些
<link src='https://cdn.bootcss.com/xxx'>


-> 使用SSR后端渲染，数据直接输出到HTML
传统方法是把html模板拿下以后，通过ajax去获取数据，渲染页面
优点：把数据直接输入到html中，浏览器直接拿到

(2) 页面渲染
CSS放前面，JS放后面
懒加载(图片懒加载)
<img id="img1" src="preview.png" data-realsrc='abc.png'>
<script type='text/javascript'>
    var img1 = document.getElementById('img1') //刚开始用一个很快加载的小图片
    img1.src = img1.getAttribute('data-realsrc') //图片真正用的时候赋值过去
</script>

减少DOM查询，对DOM查询做缓存
var plist = document.getElementByTagName('p')

减少DOM操作，多个操作尽量合并在一起执行
var frag = document.createDocumentFragment(); //创建碎片，不会触发DOM操作
for (var x = 0; x < 10; x++) {
    li = document.createElement('li');
    li.innerHTML = 'xxx';
    frag.appendChild(li)
}

body.appendChild(frag)


事件节流
textarea.addEventListener('keyup', function() {
    if (timeoutId) {
        clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(function() {
        //停止100后触发change操作
    }, 100)
})

尽早执行操作（DOMContentLoaded）
document.addEventListener('DOMContentLoaded', function() {
    //
})



