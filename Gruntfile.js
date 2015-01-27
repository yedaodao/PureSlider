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
                        baseUrl: "./",
                        appDir: "src/scripts",
                        mainConfigFile: "./src/scripts/config.js",
                        dir: "dist/scripts",
                        optimize: "uglify2",
                        modules: [
                            {
                                name: "PureSlider",
                                exclude: [
                                    "zepto"
                                ],
                                exports: ""
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