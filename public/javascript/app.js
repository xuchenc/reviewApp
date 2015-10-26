(function() {
	'use strict';
	angular.module('app', ['ui.router','ngMaterial'])
	.config(Config);
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state('CreateReview',{
			url:'/createreview',
			templateUrl:'views/CreateReview.html'
		}).state('EditReview',{
			url:'/editreview',
			templateUrl:'views/EditReview.html'
		}).state('Login_Register',{
			url:'/login_register',
			templateUrl:'views/Login_Register.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
