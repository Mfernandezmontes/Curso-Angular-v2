/**
 * Created by adminlocal on 27/03/2015.
 */
 var app = angular.module("app",["ngResource"]);

app.controller("resourceController", ["$scope", "dataResource", function($scope,dataResource)
{
    $scope.usuarios = dataResource.getUsers();

}])