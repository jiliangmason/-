/**
 * Created by Administrator on 2017/8/13 0013.
 */
function Promise(fn) {
    var value = null, callback = [];
    var state = 'pending';

    this.then = function (onFulfilled) {
        callback.push(onFulfilled);
        return this;
    }; //注册函数

    function resolve(value) {
        setTimeout(function () {
            callback.forEach(function (callback) {
                callback(value);
            })
        }, 0);

    }  //让then先注册

    fn(resolve);
}

/*
* 改进：增加state
* */
function Promise1(fn) {
    var state='pending';
    var callbacks = [];
    var value = null;

    this.then = function (onfulfill) {
        if (state === 'pending') {
            callbacks.push(onfulfill);
            return this;
        }
        onfulfill(value);
        return this;
    };

    function resolve(newvalue) {
        value = newvalue;
        state='fulfilled';
        setTimeout(function () {
            callbacks.forEach(e=>{
                e(value);
            })
        }, 0)
    }

};



