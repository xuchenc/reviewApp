(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);



	function HomeFactory($http, $q) {
		var o = {};



		o.createReview = function(review){
			var q  = $q.defer();
			$http.post('/api/review',review).then(function(){
				q.resolve();
			});
			return q.promise;
		};

		return o;
	}
})();
