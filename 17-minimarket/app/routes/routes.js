define(["modules/app", "controllers/shopCtrl", "controllers/detailCtrl"], function(app)
{
	return app.config(['$routeProvider',function($routeProvider) 
	{
		 $routeProvider.when('/', {
	    	controller: 'shopCtrl', 
	    	templateUrl: './app/templates/shop.html'
	    })
	    .when('/detail/:id', {
	    	controller: 'detailCtrl', 
	    	templateUrl: './app/templates/detail.html'
	    })
	}]);
});