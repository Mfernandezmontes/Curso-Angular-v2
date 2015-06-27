var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider',function($routeProvider) 
{
	$routeProvider
        .when("/", {
		templateUrl: "templates/login.html",
		controller: "loginController"
	});
}]);

app.controller('loginController', ['$scope', function($scope)
{
	$scope.formTitle = "Fomulario de login";
	$scope.formAction = "Login";

	$scope.submit = function(user)
	{
		var username = user.username,
			password = user.password,
			email = user.email;
		console.log("username " + username + " password " + password + " email " + email);
	}
}]);