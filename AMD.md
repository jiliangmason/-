//util.js
1. function getFormatData(data, type)
{
    
}

//a-util.js
function aGetFormatData(date) {
    return getFormatDate(date, 2)
}

//a.js
var date = new Date()
aGetFormatData(date)

这些代码中的函数必须是全局变量，才能暴露给对方。全局变量污染
a.js知道要引用a-util.js，但是它知道还要依赖于util.js吗？这个可不一定

2. 使用模块化
AMD:require.js
全局define函数，全局require函数
依赖JS会自动、异步加载

//main.js
require(['./a.js'], function(a) {
    var date = new Date()
    a.printDate(date)
})

//a.js
define(['./a-util.js'], function(aUtil) {
    var a = {
        printDate: function(date) {
            console.log(aUtil.aGetFormatDate(date))
        }  //这个函数就是main中的a
    }
    
    return a;
})
define: 引用require会产生全局define（只有define才可以被require）

//a-util.js
define(['./util.js'], function(util) {
    var aUtil =  {
       aGetFormatDate: function(date) {
         return util.getFormatDate(date, 2)
       }
    }
    
    return aUtil
})

//util.js
define(function() {
    var util = {
        getFormatDate: function(date, type) {
            if (type === 1) {
                return '2017-0-5'
            }
            if (type === 2) {
                return '2017-6-5'
            }
        }
    }
    
    return util
    
}) //最底层没有[]依赖了

define(函数)
****控制台中JS可以查看加载顺序
好处：不使用就不加载，用什么就加载什么

引用的时候只需要在全局写一个
<script src="/require.min.js" data-main="./main.js"></script>