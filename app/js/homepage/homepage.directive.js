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
					author: 'zawadzki',
                    upvotes: 15,
					upvoted: false,
					downvoted: false,
					date: moment(new Date('2016-02-20T05:29:59Z')),
					comments: [
						{ author: 'HelloKitty', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'iLikeTrains87', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'SpongBong', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'HelloMr', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'KaraLix', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'BobbyM', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false }
					]
                },
                {
					id: 1,
                    title: 'Title Two',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
					author: 'zawadzki',
                    upvotes: 13,
					upvoted: false,
					downvoted: false,
					date: moment(new Date('2016-02-20T04:29:59Z')),
					comments: [
						{ author: 'HelloKitty', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'iLikeTrains87', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'BobbyM', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false }
					]
                },
                {
					id: 2,
                    title: 'Title Three',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
					author: 'zawadzki',
                    upvotes: 12,
					upvoted: false,
					downvoted: false,
					date: moment(new Date('2016-02-20T04:15:59Z')),
					comments: [
						{ author: 'HelloKitty', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'iLikeTrains87', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'Zizu', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'BobbyM', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false }
					]
                },
                {
					id: 3,
                    title: 'Title Four',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
					author: 'zawadzki',
                    upvotes: 11,
					upvoted: false,
					downvoted: false,
					date: moment(new Date('2016-02-20T03:29:59Z')),
					comments: [
						{ author: 'HelloKitty', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'iLikeTrains87', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'Marco', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'Polo', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'BobbyM', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false }
					]
                },
                {
					id: 4,
                    title: 'Title Five',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
					author: 'zawadzki',
                    upvotes: 6,
					upvoted: false,
					downvoted: false,
					date: moment(new Date('2016-02-20T02:29:59Z')),
					comments: [
						{ author: 'HelloKitty', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'iLikeTrains87', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'Zeegee', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
						{ author: 'BobbyM', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false }
					]
                },
                {
					id: 5,
                    title: 'Title Six',
                    link: 'http://google.pl',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.',
					author: 'zawadzki',
                    upvotes: 5,
					upvoted: false,
					downvoted: false,
					date: moment(new Date('2016-02-20T02:15:59Z')),
                    comments: [
                        { author: 'HelloKitty', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
                        { author: 'iLikeTrains87', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false },
                        { author: 'BobbyM', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: moment(new Date('2016-02-20T02:15:59Z')), upvotes: 0, likes: 0, liked: false }
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
				var trigger = el[0].offsetTop;

				window.addEventListener('scroll', scrollAside);

				window.addEventListener('resize', function() {
					if( window.innerWidth < 1024 ) {
						el[0].classList.remove(className);
						el[0].style.width = '';
						window.removeEventListener('scroll', scrollAside);
					} else {
						window.addEventListener('scroll', scrollAside);
					}
				});

				function scrollAside() {
					var elWidth = el[0].offsetWidth;
					if( window.scrollY > trigger ) {
						el[0].classList.add(className);
						el[0].style.width = elWidth + 'px';
					} else {
						el[0].classList.remove(className);
						el[0].style.width = '';
					}
				}
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
				if( post.upvoted === true ) {
					post.upvotes--;
					post.classVote = '';
					post.upvoted = false;
					post.downvoted = false;
				} else if( post.downvoted === true ) {
					post.upvotes += 2;
					post.classVote = 'upvoted';
					post.upvoted = true;
					post.downvoted = false;
				} else {
					post.upvotes++;
					post.classVote = 'upvoted';
					post.upvoted = true;
					post.downvoted = false;
				}
			},
			down : function(post) {
				if( post.downvoted === true ) {
					post.upvotes++;
					post.classVote = '';
					post.downvoted = false;
					post.upvoted = false;
				} else if( post.upvoted === true ) {
					post.upvotes -= 2;
					post.classVote = 'downvoted';
					post.downvoted = true;
					post.upvoted = false;
				} else {
					post.upvotes--;
					post.classVote = 'downvoted';
					post.downvoted = true;
					post.upvoted = false;
				}
			}
		}
	}

})();