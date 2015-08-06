/**
 * Created by Taylor on 15/6/9.
 */

var strLen = (function(){
    var trim = function(chars) {
        return (chars || "").replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"");
    }

    return function(_str,_model) {
        _str = trim(_str);
        _model = model || "Ch"; // 默认为中文
        var _strLen = _str.length; // 获取字符串长度
        if(_strLen == 0) {
            return 0;
        }
        else {
            var chinese = _str.match(/[\u4e00-\u9fa5]/g);  // 匹配中文
            // 判断什么模式
            return _strLen + (chinese && _model == "Ch" ? chinese.length : 0);
        }
    }
})();