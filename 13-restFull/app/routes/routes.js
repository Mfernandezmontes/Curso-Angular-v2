define(['modules/app', 'controllers/homeCtrl'], function(app) 
{
	return app.config(['$routeProvider', function($routeProvider) 
	{
	    $routeProvider.when('/', {
	    	controller: 'homeCtrl',
	    	templateUrl: './app/templates/home.html'
	    });
	}]);
});