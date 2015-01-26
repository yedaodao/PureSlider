/**
 * Created by yedaodao on 2015/1/26.
 */
define(
    function () {
        var PageManager = function () {
            this.currentIndex = -1;
            this.totalLength = 0;
            this.pageList = [];
        };

        /**
         * 获得当前页面对象
         * @returns {*}
         */
        PageManager.prototype.getCurrentPage = function () {
            if (!this.totalLength) return null;
            return this.pageList[this.currentIndex];
        };

        /**
         * 获取当前页面索引
         * @returns {number|*}
         */
        PageManager.prototype.getCurrentIndex = function () {
            return this.currentIndex;
        };

        /**
         * 在页尾增加一页
         * @param page
         * @returns {boolean}
         */
        PageManager.prototype.addPage = function (page) {
            if (page == null) return false;
            this.pageList.push(page);
            if (!this.totalLength) this.currentIndex++;
            this.totalLength++;
        };

        /**
         * 某页是否存在
         * @param index
         * @returns {boolean}
         */
        PageManager.prototype.existPage = function (index) {
            return !(index < 0 || index > this.totalLength - 1);
        };

        /**
         * 移除某页
         * @param index
         * @returns {boolean}
         */
        PageManager.prototype.removePage = function (index) {
            if (!this.existPage(index)) return false;
            this.pageList.splice(index, 1);
            if (this.currentIndex >= index)
                this.currentIndex--;
            this.totalLength--;
        };

        /**
         * 后一页
         * @returns {boolean}
         */
        PageManager.prototype.next = function () {
            if (!this.totalLength || this.currentIndex + 2 > this.totalLength) return false;
            this.currentIndex++;
        };

        /**
         * 前一页
         * @returns {boolean}
         */
        PageManager.prototype.prev = function () {
            if (this.currentIndex < 1) return false;
            this.currentIndex--;
        };

        /**
         * 跳转到某一页
         * @param index
         * @returns {boolean}
         */
        PageManager.prototype.go = function (index) {
            if (!this.existPage(index)) return false;
            this.currentIndex = index;
        };


        return new PageManager();
    }
);