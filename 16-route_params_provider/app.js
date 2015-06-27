var app = angular.module("app",["ngRoute"]);

app.config(['$routeProvider',function($routeProvider) 
{
	$routeProvider.when("/route", {
		templateUrl : "route.html",
        controller : "homeController"
	})
	.when("/location", {
		templateUrl : "location.html",
        controller : "homeController"
	})
	.when("/params/:id", {
		templateUrl : "params.html",
        controller : "homeController"
	})
}]);


app.controller('homeController', ['$scope','$route','$routeParams','$location', 
function($scope, $route, $routeParams, $location)
{
	$scope.refresh = function()
	{
		$route.reload();
	}

	$scope.redirect = function(to)
	{
		$location.path(to);
	}

	$scope.params = function()
	{
		var id = $routeParams.id;
		alert(id);
	}
}]);