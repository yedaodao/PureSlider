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
                console.log(container.height());
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
                $.each(pages, function (i, n) {
                    pageManager.addPage(n);
                });

            },

            /**
             * 翻页
             * @param pageManager
             * @param direction
             */
            turnPage: function (pageManager, direction) {
                if (direction == 0) {
                    if (!pageManager.prev()) return false;
                    this.slide(baseWidth * pageManager.getCurrentIndex(), pageManager);
                }
                else if (direction == 1) {
                    if (!pageManager.next()) return false;
                    this.slide(-baseWidth * pageManager.getCurrentIndex(), pageManager);
                }
            },

            /**
             * 移除固有监听器
             */
            removeListener: function () {

            },

            /**
             * 滚动
             * @param distance
             * @param pageManager
             */
            slide: function (distance, pageManager) {
                container.animate({
                    translate3d: distance + "px,0,0"
                }, 400, "ease-out", function () {
                    container.trigger("PURE_SLIDE", [
                        pageManager.getCurrentIndex(),
                        pageManager.getCurrentPage()
                    ]);
                });
            }
        }
    }
})(window.Zepto);