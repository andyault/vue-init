'use strict';

export default new VueRouter({
	mode: 	'history',

	routes: [
		{ path: '/', component: require('../../../pages/example.vue') } //todo? - ugly
	]
});