define(["modules/app", "services/shopProducts"], function(app)
{
	app.controller('shopCtrl', ['$scope', '$location', 'Products', function($scope, $location, Products)
	{
		var promesa = Products.getProducts();
		promesa.then(function(prods)
		{
			$scope.products = prods;
		},
		function(error)
		{
			alert("Error: " + error);
		});

		$scope.showDetail = function(i)
		{
			$location.path("detail/"+(i+1));
		}
	}]);
});