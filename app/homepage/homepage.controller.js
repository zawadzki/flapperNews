(function() {
	'use strict';

	angular
		.module('flapperNews.homepage')
		.controller('HomepageCtrl', HomepageCtrl);

	function HomepageCtrl() {
		var vm = this;

		function Post() {
			this.title 	 = '';
			this.desc  	 = '';
			this.upvotes = 0;
		}

		vm.newPost = new Post();
		vm.posts = [
			{ title: 'post 1', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorum itaque, necessitatibus quae ratione temporibus.', upvotes: 5 },
			{ title: 'post 2', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorum itaque, necessitatibus quae ratione temporibus.', upvotes: 2 },
			{ title: 'post 3', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorum itaque, necessitatibus quae ratione temporibus.', upvotes: 8 },
			{ title: 'post 4', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorum itaque, necessitatibus quae ratione temporibus.', upvotes: 9 },
			{ title: 'post 5', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorum itaque, necessitatibus quae ratione temporibus.', upvotes: 4 }
		];
		vm.addPost = addPost;

		function addPost() {
			if( vm.newPost.title === '' ) { return; }
			vm.posts.push(vm.newPost);
			vm.newPost = new Post();
		}
	}

})();
