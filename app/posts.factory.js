(function() {
	'use strict';

	angular
		.module('flapperNews')
		.factory('posts', posts);

	function posts() {
		return {
			posts: []
		};
	}

})();