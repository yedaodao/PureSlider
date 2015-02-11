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
             * @param pageManager
             * @returns {boolean}
             */
            init: function (cDom, pageManager) {
                carouselDom = cDom;
                container = carouselDom.find(".carousel-container");
                if (container.hasClass("init"))
                    return false;
                carouselDom.css("position", "relative").css("overflow", "hidden");
                pages = container.find(".carousel-page");
                pageNum = pages.length;
                this.resize();
                this.addListener(pageManager);
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
                    n.style.width = baseWidth + "px";
                });
            },

            /**
             * 添加固有监听器
             * @param pageManager
             */
            addListener: function (pageManager) {
                var self = this;
                pageManager.addPages(pages);
                container.click(function () {
                    console.log(pageManager.getCurrentIndex());
                    pageManager.next();
                    self.slide(-baseWidth * pageManager.getCurrentIndex());
                });
            },

            /**
             * 移除固有监听器
             */
            removeListener: function () {

            },

            /**
             * 滚动
             * @param distance
             * @param callBack
             */
            slide: function (distance, callBack) {
                container.animate({
                    translate3d: distance + "px,0,0"
                }, 500, "ease-out", callBack);
            }
        }
    }
})(window.Zepto);