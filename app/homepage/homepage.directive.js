(function() {
	'use strict';

    //Fill site with placeholders
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

    //Sticky aside directive
	angular
		.module('flapperNews.homepage')
		.factory('aside', aside);

	function aside() {
		return {
			sticky : function(el, className) {
                var elWidth = el[0].offsetWidth;
                var trigger = el[0].offsetTop;

				window.addEventListener('scroll', function() {
					if( window.scrollY > trigger ) {
						el[0].classList.add(className);
                        el[0].style.width = elWidth + 'px';
					} else {
						el[0].classList.remove(className);
                        el[0].style.width = '';
					}
				});
			}
		};
	}

})();