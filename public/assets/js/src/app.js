'use strict';

//keep routes separate
import router from './routes';

//our app
const app = new Vue({
	el: 	'main',
	router: router
});