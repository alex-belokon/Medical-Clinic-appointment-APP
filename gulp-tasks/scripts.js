const { src, dest } = require("gulp");
const { browsersync } = require("./serv");
// const concat = require('gulp-concat');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify-es').default;


const scripts = () => {
	src("./src/js/*.js")
		// .pipe(concat("script.js"))
		.pipe(dest("./dist/js/"))
		.pipe(uglify())
		.pipe(rename({
			extname: ".min.js"
		}))
		.pipe(dest("./dist/js/"))
		.pipe(browsersync.reload({ stream: true }));
	
	src("./src/js/classes/*.js")
	// .pipe(concat("script.js"))
		.pipe(dest("./dist/js/classes/"))
		.pipe(uglify())
		.pipe(rename({
			extname: ".min.js"
		}))
		.pipe(dest("./dist/js/classes/"))
		.pipe(browsersync.reload({ stream: true }));

	src("./src/js/utilities/*.js")
	// .pipe(concat("script.js"))
		.pipe(dest("./dist/js/utilities/"))
		.pipe(uglify())
		.pipe(rename({
			extname: ".min.js"
		}))
		.pipe(dest("./dist/js/utilities/"))
		.pipe(browsersync.reload({ stream: true }));
	};

exports.scripts = scripts;
