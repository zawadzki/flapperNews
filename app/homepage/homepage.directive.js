(function() {
	'use strict';

    //Fill site with placeholders
	angular
		.module('flapperNews.homepage')
		.factory('posts', posts);

	function posts() {
		return {
			posts: [
				{
                    title: 'Title One',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
                    upvotes: 10,
                    comments: [
                        { author: 'Joe', body: 'Cool post!', likes: 0 },
                        { author: 'Bob', body: 'Great idea but everything is wrong!', likes: 0 }
                    ]
                },
                {
                    title: 'Title Two',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
                    upvotes: 9,
                    comments: [
                        { author: 'Joe', body: 'Cool post!', likes: 0 },
                        { author: 'Bob', body: 'Great idea but everything is wrong!', likes: 0 }
                    ]
                },
                {
                    title: 'Title Three',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
                    upvotes: 8,
                    comments: [
                        { author: 'Joe', body: 'Cool post!', likes: 0 },
                        { author: 'Bob', body: 'Great idea but everything is wrong!', likes: 0 }
                    ]
                },
                {
                    title: 'Title Four',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
                    upvotes: 7,
                    comments: [
                        { author: 'Joe', body: 'Cool post!', likes: 0 },
                        { author: 'Bob', body: 'Great idea but everything is wrong!', likes: 0 }
                    ]
                },
                {
                    title: 'Title Five',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
                    upvotes: 6,
                    comments: [
                        { author: 'Joe', body: 'Cool post!', likes: 0 },
                        { author: 'Bob', body: 'Great idea but everything is wrong!', likes: 0 }
                    ]
                },
                {
                    title: 'Title Six',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
                    upvotes: 5,
                    comments: [
                        { author: 'Joe', body: 'Cool post!', likes: 0 },
                        { author: 'Bob', body: 'Great idea but everything is wrong!', likes: 0 }
                    ]
                }
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