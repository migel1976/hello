var app=angular.module('app',[]);
app.controller('mainCtrl',function($http,$scope){
	$http.get('http://localhost:3000/surfers')
	.success(function(result){
		$scope.surfers=result;
	})
	.error(function(result){
		console.log('error in client get:surfers')
	})
});