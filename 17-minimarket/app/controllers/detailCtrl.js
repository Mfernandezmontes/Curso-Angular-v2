define(["modules/app", "services/shopProducts"], function(app)
{
	app.controller('detailCtrl', [
		'$scope',
		'$location',
		'$routeParams',
		'Products',
	function($scope, $location, $routeParams, Products)
	{
		var promesa = Products.getProducts();
		promesa.then(function(prods)
		{
			$scope.product = prods[$routeParams.id-1];
		}
		,function(error)
		{
			alert("Error " + error);
		});

		$scope.redirect = function()
		{
			$location.path("/");
		}

	}]);
});