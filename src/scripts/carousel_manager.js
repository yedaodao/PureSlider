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
        var carouselDom = null,
            container = null,
            pages = null,
            pageNum = 0,
            baseWidth = 0;
        return {
            /**
             * 初始化结点
             * @param cDom
             * @returns {boolean}
             */
            init: function (cDom) {
                carouselDom = cDom;
                container = carouselDom.find(".carousel-container");
                if (container.hasClass("init"))
                    return false;
                carouselDom.css("position", "relative").css("overflow", "hidden");
                pages = container.find(".carousel-page");
                pageNum = pages.length;
                this.resize();
                container.addClass("init");
            },
            /**
             * 调整大小
             */
            resize: function () {
                baseWidth = carouselDom.width();
                carouselDom.height(container.height());
                container.width(pageNum * baseWidth);
                $.each(pages, function (i, n) {
                    console.log(n.style.width);
                });
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