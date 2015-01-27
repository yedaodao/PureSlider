/**
 * Created by yedaodao on 2015/1/26.
 */
requirejs.config({
    baseUrl: "../src/scripts",
    paths: {
        zepto:"../../components/zepto/zepto"
    },
    shim: {
        zepto: {
            exports: "$"
        }
    }
});

define(
    [
        "PageManager",
        "Carousel"
    ],
    function (PageManager, Carousel) {
        console.log(PageManager);
        return {
            test: function () {
                alert(PageManager.getCurrentIndex());
            }
        }
    }
);