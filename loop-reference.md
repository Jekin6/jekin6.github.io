#循环引用

如果循环引用中包含DOM对象或者ActiveX对象，那么就会发生内存泄露。内存泄露的后果是在浏览器关闭前，即使是刷新页面，这部分内存不会被浏览器释放。

简单的循环引用：

    var el = document.getElementById('MyElement');
    var func = function () {
        //…
    }
    el.func = func;
    func.element = el;
但是通常不会出现这种情况。通常循环引用发生在为dom元素添加闭包作为expendo的时候。

    function init() {
        var el = document.getElementById('MyElement');
        el.onclick = function () {
            //……
        }
    }
    init();
init在执行的时候，当前上下文我们叫做context。这个时候，context引用了el，el引用了function，function引用了context。这时候形成了一个循环引用。

下面2种方法可以解决循环引用：

1)  ****置空dom对象

    function init() {
        var el = document.getElementById('MyElement');
        el.onclick = function () {
            //……
        }
    }
    init();
    //可以替换为：
    function init() {
        var el = document.getElementById('MyElement');
        el.onclick = function () {
            //……
        }
        el = null;
    }
    init();
将el置空，context中不包含对dom对象的引用，从而打断循环应用。

如果我们需要将dom对象返回，可以用如下方法：

    function init() {
        var el = document.getElementById('MyElement');
        el.onclick = function () {
            //……
        }
        return el;
    }
    init();
    //可以替换为：
    function init() {
        var el = document.getElementById('MyElement');
        el.onclick = function () {
            //……
        }
        try {
            return el;
        } finally {
            el = null;
        }
    }
    init();
2)  ****构造新的context

    function init() {
        var el = document.getElementById('MyElement');
        el.onclick = function () {
            //……
        }
    }
    init();
    //可以替换为：
    function elClickHandler() {
        //……
    }
    function init() {
        var el = document.getElementById('MyElement');
        el.onclick = elClickHandler;
    }
    init();
把function抽到新的context中，这样，function的context就不包含对el的引用，从而打断循环引用。
