/**
 * Created by yedaodao on 2015/1/21.
 */
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            less: {
                development: {
                    files: {
                        "dist/css/pure_slider.css": "src/less/pure_slider.less"
                    }
                }
            },
            requirejs: {
                compile: {
                    options: {
                        baseUrl: "src/scripts",
                        dir: "dist/scripts",
                        optimize: "uglify",
                        removeCombined: true,
                        skipDirOptimize: true,
                        paths: {
                            zepto:"../../components/zepto/zepto"
                        },
                        shim: {
                            zepto: {
                                exports: "$"
                            }
                        },
                        modules: [
                            {
                                name: "PureSlider",
                                exclude: [
                                    "zepto"
                                ]
                            }
                        ]}
                }
            }
        }
    );

// Load the plugin
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

// Default task(s).
    grunt.registerTask('default', ['less', 'requirejs']);

}
;