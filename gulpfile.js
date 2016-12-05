const gulp 		= require('gulp');
const path 		= require('path');
const webpack 	= require('webpack');
const exec 		= require('child_process').exec;

//used a bunch
const paths = {
	watch: {
		front: 	path.join(__dirname, './public/**/*.@(js|vue)'),
		back: 	path.join(__dirname, './app/**/*.js')
	},

	node: './app',

	webpack: {
		context: 	path.join(__dirname, './public'),
		entry: 		'./assets/js/src/app.js',
		outputPath: './assets/js',
		outputName: 'bundle.js'
	}
}

//config - only used for webpack?
const cfg = {
	webpack: {
		context: 	paths.webpack.context,
		entry: 		paths.webpack.entry,
		output: {
			path: 		path.join(paths.webpack.context, paths.webpack.outputPath),
			filename: 	paths.webpack.outputName
		},

		module: {
			loaders: [
				{
					test: 	/\.js$/,
					loader: 'babel-loader',
					query: {
						presets: ['latest']
					}
				},
				{
					test: 	/\.vue$/,
					loader: 'vue-loader'
				}
			]
		},

		vue: {
			loaders: {
				js: 'babel-loader?presets[]=latest'
			}
		}
	}
}

//tasks
//frontend
gulp.task('webpack', (cb) => {
	webpack(cfg.webpack, (err, stats) => {
		if(err) return console.error(err);

		console.log(stats.toString());

		cb();
	});
});

gulp.task('webpack-watch', ['webpack'], () => {
	gulp.watch(paths.watch.front, ['webpack']);
});

//backend
let node;

gulp.task('node', () => {
	if(node) node.kill();

	node = exec(`node ${paths.node}`, (err, stdout, stderr) => {
		console.log(stdout);
		console.error(stderr);
	});

	node.stdout.pipe(process.stdout);
});

gulp.task('node-watch', ['node'], () => {
	gulp.watch(paths.watch.back, ['node']);
});

//done :)
gulp.task('default', ['webpack-watch', 'node-watch']);

//clean up after ourselves
process.on('exit', () => {
	if(node) node.kill();
});