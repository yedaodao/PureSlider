/**
 * Created by yedaodao on 2015/1/30.
 */
;
(function ($, window) {
    //初始化命名空间
    if (!$.Pure)
        $.Pure = {};
    //通用设置
    var pluginName = "PureSlider",
        defaultOptions = {
            autoScroll: true,
            scrollInterval: 3000,
            autoHeight: true,
            touch: true
        };
    //真正处理函数
    $.Pure[pluginName] = function (el, opts) {
        var pageManager = $.Pure.PageManager();
        var i = pageManager.getCurrentIndex();
        console.log(pageManager);
    };

    //包装插件
    $.fn[pluginName] = function (options) {
        return $.Pure[pluginName](this, options);
    }

})(window.Zepto, window);