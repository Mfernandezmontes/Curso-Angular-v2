define(['modules/app', 'controllers/homeCtrl', 'controllers/loginCtrl'], function(app)
{
	return app.config(['$routeProvider',function($routeProvider) 
	{
		$routeProvider.when("/", {
			controller: 'homeCtrl',
			templateUrl: './app/templates/home.html'
		})
		.when("/login", {
			controller: 'loginCtrl',
			templateUrl: './app/templates/login.html'
		});
	}]);
});