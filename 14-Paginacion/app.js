var app = angular.module("app", ['ui.bootstrap']);

app.controller('PaginacionController', ['$scope', '$http', function($scope, $http)
{
	$scope.results = [];
	$scope.currentPage = 1;
	$scope.numPerPage = 5;
	$scope.showLinks = 7;

	$scope.createPagination = function()
	{
		$http.get("data.php").success(function(data)
		{
			$scope.results = data;

			$scope.numPages = function()
			{
				return Math.ceil($scope.results.length / $scope.numPerPage);
			}

			$scope.$watch('currentPage + numPerPage', function() 
            {
                //desde el resultado que queremos mostrar
                var desde = (($scope.currentPage - 1) * $scope.numPerPage),
                //hasta el resultado que queremos mostrar
                hasta = desde + $scope.numPerPage;
                //devolvemos el numero de objetos que queremos mostrar
                //conforme nos movemos en la paginación, por ejemplo, en el 
                //enlace dos devolvemos del 5 al 9 ambos inclusive
                $scope.total = $scope.results.slice(desde, hasta);
                console.log($scope.total)
            });
		});
	}

	$scope.createPagination();
}]);