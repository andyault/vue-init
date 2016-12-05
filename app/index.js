const express 	= require('express');
const path 		= require('path');

//paths
const paths = {
	public: 	path.join(__dirname, '../public'),
	views: 		path.join(__dirname, '../public/views'),
	modules: 	path.join(__dirname, '../node_modules'),
	assets: 	path.join('/node_assets')
}

//here we go
const app = express();

//assets in node_modules
app.use(path.join(paths.assets, '/vue'), express.static(path.join(paths.modules, '/vue')));
app.use(path.join(paths.assets, '/vue-router'), express.static(path.join(paths.modules, '/vue-router')));

//static files
app.use(express.static(paths.public));

//front end routing
app.use('*', (req, res) => {
	res.sendFile(path.join(paths.views, 'index.html'));
});

//done :)
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`server started at port ${port}`);
});