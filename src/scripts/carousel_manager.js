/**
 * Created by Yedaodao on 2015/2/6.
 */
;
(function ($) {
    var pluginName = "CarouselManager";
    $.Pure[pluginName] = function () {
        return new CarouselManager();
    };
    function CarouselManager() {
        var container = null,
            pages = null;
        return {
            /**
             * 初始化结点
             * @param carouselDom
             * @returns {boolean}
             */
            init: function (carouselDom) {
                container = carouselDom.find(".carousel-container");
                if (container.hasClass("init")) return false;
                pages = container.find(".carousel-page");
                this.resize();
                container.addClass("init");
            },
            /**
             * 调整大小
             */
            resize: function () {

            },

            /**
             * 滚动
             * @param distance
             * @param callBack
             */
            slide: function (distance, callBack) {

            }
        }
    }
})(window.Zepto);