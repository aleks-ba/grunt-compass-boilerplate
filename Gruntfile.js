module.exports = function(grunt) {

    grunt.initConfig({

        // Package
        pkg: grunt.file.readJSON('package.json'),

        // Compass
        compass: {
            build: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    outputStyle: 'expanded',
                    watch: 'true',
                    config: 'config.rb'
                }
            }
        },

        // Clean
        clean: {
            pre: ['styleguide', 'assets/css'],
            post: ['.sass-cache']
        },

        // Watch
        watch: {
            watch: {
                  
                    // Replace with whatever file you want to trigger the update from
                    // Either as a String for a single entry 
                    // or an Array of String for multiple entries
                    // You can use globing patterns like `css/**/*.css`
                    // See https://github.com/gruntjs/grunt-contrib-watch#files
                    files: ['**/*.js','**/*.html','css/style.css'],
                    options: {
                      livereload: true
                    
                  }
                }
        },

        // Sassdown (Styleguide)
        sassdown: {
            options: {
                assets: ['assets/css/*.css']
            },
            files: {
                expand: true,
                cwd: 'sass/blocks',
                src: ['**/*.{sass,scss}'],
                dest: 'styleguide/'
            }
        },


        connect: {
          server: {
            options: {
                livereload: true,
                open: {
                target: 'http://127.0.0.1:8000'
                }
            }
          }
        }
        

    });

    // Load NPM Tasks
    grunt.loadNpmTasks('sassdown');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Register Grunt tasks
    grunt.registerTask('default', ['connect:server', 'compass' , 'clean:pre',  'sassdown', 'clean:post' ]);
  
};
