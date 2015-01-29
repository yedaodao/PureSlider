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
            uglify: {
                options: {
                    comporess: false,
                    mangle: false,
                    beautify: true
                },
                my_target: {
                    files: {
                        "dist/script/PureSlider.js": []
                    }
                }
            }
        }
    );

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['less','uglify']);

}
;