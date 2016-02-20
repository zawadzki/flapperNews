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
					id: 0,
                    title: 'Title One',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
                    upvotes: 10,
					comments: [
						{ author: 'HelloKitty', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false },
						{ author: 'iLikeTrains87', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false },
						{ author: 'BobbyM', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false }
					]
                },
                {
					id: 1,
                    title: 'Title Two',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
                    upvotes: 9,
					comments: [
						{ author: 'HelloKitty', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false },
						{ author: 'iLikeTrains87', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false },
						{ author: 'BobbyM', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false }
					]
                },
                {
					id: 2,
                    title: 'Title Three',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
                    upvotes: 8,
					comments: [
						{ author: 'HelloKitty', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false },
						{ author: 'iLikeTrains87', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false },
						{ author: 'BobbyM', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false }
					]
                },
                {
					id: 3,
                    title: 'Title Four',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
                    upvotes: 7,
					comments: [
						{ author: 'HelloKitty', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false },
						{ author: 'iLikeTrains87', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false },
						{ author: 'BobbyM', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false }
					]
                },
                {
					id: 4,
                    title: 'Title Five',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
                    upvotes: 6,
					comments: [
						{ author: 'HelloKitty', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false },
						{ author: 'iLikeTrains87', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false },
						{ author: 'BobbyM', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false }
					]
                },
                {
					id: 5,
                    title: 'Title Six',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
                    upvotes: 5,
                    comments: [
                        { author: 'HelloKitty', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false },
                        { author: 'iLikeTrains87', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false },
                        { author: 'BobbyM', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 0, liked: false }
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

	//Up/down voting directive
	angular
		.module('flapperNews.homepage')
		.factory('vote', vote);

	function vote() {
		return {
			up : function(post) {
				post.upvotes ++;
				post.class = 'upvoted';
			},
			down : function(post) {
				post.upvotes --;
				post.class = 'downvoted';
			}
		}
	}

})();