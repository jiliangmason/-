1. 页面加载过程
2. 性能优化
3. 网页安全

渲染过程:
题目: 从输入url->得到html的详细过程
window.onload和DOMContentLoaded的区别
window.onload: 页面资源全部加载完毕，包括图片视频
DOM渲染完即可执行，此时图片、视频可能还没有加载完

加载资源的形式：
1. 输入url或跳转页面加载html
2. 加载html中依赖的静态资源(js,css,图片视频...)

加载一个资源的过程:
1. 浏览器根据DNS服务器来解析出域名的IP地址。
2. 向这个IP发出http请求
3. 服务器收到，处理并返回http请求
4. 浏览器得到返回内容

浏览器渲染页面的过程
1. 根据HTML结构生成DOM树
2. 根据CSS生成CSSOM
3. 将DOM和CSSOM整合成Render树(Render树跟DOM树结构相同加了样式而已)
4. 根据Render树开始渲染和展示
5. 遇到<script>,会执行并阻塞渲染(js代码有可能把之前生成的结构改变了)




