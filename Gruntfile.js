/**
 * simply Gruntfile.js
 */
module.exports = function (grunt) {

    // Grunt 配置初始化
    grunt.initConfig({

        // 读取 package.json 依赖
        pkg: grunt.file.readJSON('package.json'),

        // task set
        ejs_static: {
            preview: {
                options: {
                  dest: 'html',
                  path_to_data: 'view/data/render.json',
                  path_to_layouts: 'view/',
                  index_page: 'index',
                  parent_dirs: false,
                  underscores_to_dashes: true,
                  file_extension: '.html',
                  underscore: true
                }
            }
        },

        watch: {
            reload:{
                files: 'html/**',
                options:{
                    livereload: 1337,
                }
            }
        }


    })

    grunt.loadNpmTasks('grunt-ejs-static');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('render', ['ejs_static']);
    grunt.registerTask('coding', ['watch:reload']);
}