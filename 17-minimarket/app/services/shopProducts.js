define(["modules/app"], function(app)
{
	app.service('Products', ['$http', '$q', function($http, $q)
	{
		this.getProducts = function()
		{
			var deferred = $q.defer();
			$http.get("app/resources/data.json").success(function(data)
			{
				deferred.resolve(data);
			})
			.error(function(error)
			{
				deferred.reject(error);
			});
			return deferred.promise;
		}
	}]);
});