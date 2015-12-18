/**
 * Created by kdj on 2015/12/18.
 */
window.onload = function () {
    function absorbEvent_(event) {
        var e = event || window.event;
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
    }
    function preventLongPressMenu(node) {
        node.ontouchstart = absorbEvent_;
        node.ontouchmove = absorbEvent_;
        node.ontouchend = absorbEvent_;
        node.ontouchcancel = absorbEvent_;
    }
    preventLongPressMenu(body);
}

/*
* 阻止页面的滑动 和长按出现复制弹框
* 填写相应的ID
* */
//    var thecontainer = document.getElementById('thecontainer');