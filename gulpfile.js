import gulp from "gulp";
import { path } from "./gulp/config/path.js"
import { plugins } from "./gulp/config/plugins.js";
import { scss } from "./gulp/tasks/scss.js"
import { views } from "./gulp/tasks/views.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}


import { clean } from "./gulp/tasks/clean.js";
import { server } from "./gulp/tasks/server.js";
import { imageMin } from "./gulp/tasks/imagemin.js";


function watcher() {
    gulp.watch(path.watch.pug, views),
    gulp.watch(path.watch.img, imageMin),
    gulp.watch(path.watch.scss, scss);
    
}

const mainTasks = gulp.parallel(views, scss, imageMin);
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));

gulp.task('default', dev);
