/**
 * Created by yedaodao on 2015/1/26.
 */
define(
    [
        "PageManager",
        "Carousel"
    ],
    function (PageManager, Carousel) {
        return {
            test: function () {
                alert(PageManager.getCurrentIndex());
            }
        }
    }
);