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
            baseWidth = 0,
            pageManager = null;
        return {
            /**
             * 初始化结点
             * @param cDom
             * @param pm
             * @returns {boolean}
             */
            init: function (cDom, pm) {
                carouselDom = cDom;
                container = carouselDom.find(".carousel-container");
                pageManager = pm;
                if (container.hasClass("init"))
                    return false;
                carouselDom.css("position", "relative").css("overflow", "hidden");
                pages = container.find(".carousel-page");
                pageNum = pages.length;
                $.each(pages, function (i, n) {
                    pageManager.addPage(n);
                });
                this.resize();
                this.addListener();
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
             */
            addListener: function () {
                var self = this;
                carouselDom.click($.proxy(this.turnPage, this, 1));
            },

            /**
             * 翻页
             * @param direction
             */
            turnPage: function (direction) {
                if (direction == 0) {
                    if (!pageManager.prev()) return false;
                    this.slide(baseWidth * pageManager.getCurrentIndex());
                }
                else if (direction == 1) {
                    if (!pageManager.next()) return false;
                    this.slide(-baseWidth * pageManager.getCurrentIndex());
                }
            },

            /**
             * 跳到某页
             * @param pageIndex
             * @returns {boolean}
             */
            goPage: function (pageIndex) {
                if (!pageManager.go(pageIndex)) return false;
                this.slide(baseWidth * pageManager.getCurrentIndex());
            },

            movePage: function () {

            },

            /**
             * 移除固有监听器
             */
            removeListener: function () {

            },

            /**
             * 滚动
             * @param distance
             */
            slide: function (distance) {
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