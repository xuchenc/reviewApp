(function() {
	'use strict';
	angular.module('app')
	.controller('CreateController', CreateController);
	function CreateController(HomeFactory,$state) {
		var vm = this;

    vm.review={};

    vm.addReview = function(){
      HomeFactory.createReview(vm.review).then(function(){
        $state.go('Home');
      });
    };
	}
})();
