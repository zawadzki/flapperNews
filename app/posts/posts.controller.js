(function() {
	'use strict';

	angular
		.module('flapperNews.posts')
		.controller('PostsCtrl', PostsCtrl);

	PostsCtrl.$inject = ['$routeParams', 'posts'];

	function PostsCtrl($routeParams, posts) {
		var vm = this;

        vm.post = posts.posts[$routeParams.id];

        //Adding comment handler
        function Comment() {
            this.body 	 = '';
            this.likes = 0;
        }

        vm.newComment = new Comment();
        vm.comments = posts.posts;
        vm.addComment = addComment;

        function addComment() {
            vm.comments.push(vm.newComment);
            vm.newComment = new Comment();
        }

        //Votes handler
        vm.upVote = upVote;

        function upVote(post) {
            vm.post.upvotes ++;
            vm.post.class = 'upvoted';
        }

        vm.downVote = downVote;

        function downVote(post) {
            vm.post.upvotes --;
            vm.post.class = 'downvoted';
        }

        console.log(vm.post);
        console.log($routeParams.id);
	}

})();
