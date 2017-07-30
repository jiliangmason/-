1. CommonJS不会异步加载JS，同步一次性加载出来
// util.js
module.exports = {
    getFormatDate: function(date, type) {
        if (type == 1) {
        
        }
        
        if (type == 2) {
        
        }
    }
}

// a-util.js
var util = require('util.js')
module.exports = {
    aGetFormatDate: function(date) {
        return util.getFormatDate(date)
    }
}

构建工具的支持

