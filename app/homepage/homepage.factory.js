(function() {
	'use strict';

	angular
		.module('flapperNews.homepage')
		.factory('posts', posts);

	function posts() {
		return {
			posts: []
		};
	}

})();