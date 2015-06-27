define(['modules/app','factories/api'], function (app) 
{
	app.controller('homeCtrl', ['$scope','Books', function ($scope, Books) 
	{
	    Books.find({'Id': 1});
	}]);
});
