/**
 * Created by yedaodao on 2015/1/30.
 */
(function ($) {
    var pluginName = "PageManager";
    $.Pure[pluginName] = function () {
        return new PageManager();
    };
    function PageManager() {
        var currentIndex = -1,
            totalLength = 0,
            pageList = [];
        return {
            /**
             * 获得当前页面
             * @returns {*}
             */
            getCurrentPage: function () {
                if (!totalLength) return null;
                return pageList[currentIndex];
            },
            /**
             * 获得当前页面
             * @returns {number}
             */
            getCurrentIndex: function () {
                return currentIndex;
            },
            /**
             * 在最后增加一页
             * @param page
             * @returns {boolean}
             */
            addPage: function (page) {
                if (page == null) return false;
                pageList.push(page);
                if (totalLength == 0) currentIndex++;
                totalLength++;

            },
            /**
             * 某页是否存在
             * @param index
             * @returns {boolean}
             */
            existPage: function (index) {
                return !(index < 0 || index > totalLength - 1);
            },
            /**
             * 移除某页
             * @param index
             */
            removePage: function (index) {
                if (this.existPage(index)) {
                    pageList.splice(index, 1);
                    if (currentIndex >= index)
                        currentIndex--;
                    totalLength--;
                }
            },
            /**
             * 后一页
             * @returns {boolean}
             */
            next: function () {
                if (currentIndex < 0 || currentIndex + 2 > totalLength) return false;
                currentIndex++;
            },
            /**
             * 前一页
             * @returns {boolean}
             */
            prev: function () {
                if (currentIndex < 1) return false;
                currentIndex--;
            },
            /**
             * 跳转到某页
             * @param index
             * @returns {boolean}
             */
            go: function (index) {
                if (!this.existPage(index)) return false;
                currentIndex = index;
            }
        }
    }
})(window.Zepto);