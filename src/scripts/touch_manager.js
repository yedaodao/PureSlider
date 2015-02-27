/**
 * 触屏事件管理
 * Created by yedaodao on 2015/2/12.
 */
;
(function ($) {
    var pluginName = "TouchManager";
    $.Pure[pluginName] = function () {
        return new TouchManager();
    };
    function TouchManager() {
        return {
            addSwipingListener: function (el, callback) {
                
            }
        }
    }
})(window.Zepto);