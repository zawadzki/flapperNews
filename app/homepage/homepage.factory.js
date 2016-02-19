(function() {
	'use strict';

	angular
		.module('flapperNews.homepage')
		.factory('posts', posts);

	function posts() {
		return {
			posts: [
				{title: 'Title One', link: 'http://google.pl', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.', upvotes: 5},
				{title: 'Title Two', link: 'http://google.pl', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.', upvotes: 2},
				{title: 'Title Three', link: 'http://google.pl', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.', upvotes: 15},
				{title: 'Title Four', link: 'http://google.pl', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.', upvotes: 9},
				{title: 'Title Five', link: 'http://google.pl', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.', upvotes: 4}
			]
		};
	}

})();