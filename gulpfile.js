var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    path = require('path'),
    glob = require('glob'),
    usemin = require('gulp-usemin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    minifyCSS = require('gulp-minify-css'),
    newer = require('gulp-newer'),
    sass   = require('gulp-sass');


 

var components = glob.sync('app/modules/*').map(function(componentDir) {
        console.log(path.basename(componentDir));
        return path.basename(componentDir);
});

components.forEach(function(name){
    
    gulp.task(name+'-style', function() {
        return gulp.src('app/modules/'+name+'/scss/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('app/modules/'+name+'/css/'))
    });    

    gulp.task(name+'-js', function() {
        return gulp.src('app/modules/'+name+'/**/*.js')
            .pipe(concat('module-'+name+'.min.js'))
            .pipe(gulp.dest('app/modules/'+name+'/dist/'))
    });    
    
    gulp.task(name+'-build', [name+'-style', name+'-style']);
});

// build all components
gulp.task('build-components', components.map(function(name){ return name+'-js'; }));


gulp.task('move-files', function(){
    
    return gulp.src('app/**')
        .pipe(newer('build/app'))
        .pipe(gulp.dest('build/app'));
})

gulp.task('final-package', function(){
    
    return gulp.src('./*.html')
            .pipe(usemin({
                    css:[minifyCSS(), 'concat'],
                    js:[uglify(), rev()]
                }))
            .pipe(gulp.dest('build/'));
})


// create a default task and just log a message
gulp.task('default',['build-components', 'move-files', 'final-package'], function() {
  return gutil.log('Gulp is running!')
});