/**
 * Created by yedaodao on 2015/1/21.
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