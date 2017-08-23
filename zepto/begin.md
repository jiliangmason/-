/**
 * Created by Administrator on 2017/8/14 0014.
 */
[].push === Array.prototype.push
[].concat === Array.prototype.concat
[].map === Array.prototype.map

var arr = [1,2,3]
arr.__proto__ = {
    addClass: function() {
        console.log('fn1')
    },
    concat: Array.prototype.concat,
    push: Array.prototype.push
};

arr.addClass();