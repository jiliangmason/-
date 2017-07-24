/**
 * Created by Administrator on 2017/7/20 0020.
 */
function Elem(id) {
    this.elem = document.getElementById(id);

}

Elem.prototype.html = function (val) {
    var elem = this.elem;  //this是一个叫Elem的对象,div1
    if (val) {
        elem.innerHTML = val;
        return this; //链式操作
    }
    else {
        return elem.innerHTML
    }
};

Elem.prototype.on = function (type, fn) {
    var elem = this.elem;
    elem.addEventListener(type, fn);
    return this;
};

var div1 = new Elem('div1');
//console.log(div1.html())

div1.html('<p>hello imooc</p>');
div1.on('click', function () {
    alert('clicked')
});

//链式操作
div1.html('<p>hello imooc</p>').on('click', function () {
    alert('click')
}).html('<p>javascript</p>');