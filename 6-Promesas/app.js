/**
 * Created by adminlocal on 27/03/2015.
 */
var app = angular.module("app",["ngRoute"]);

app.config(['$routeProvider',function($routeProvider)
{
    $routeProvider.when("/", {
        templateUrl: "test.html",
        controller: "homeController"
    });
}]);

app.controller('homeController', ['$scope', '$q', function($scope, $q)
{

    $scope.titulo = "Utilizando Promesas en AngularJS";
    var defer = $q.defer();

    defer.promise.then(function(fruta)
    {
        alert("Primer alert, Fruta es " + fruta);
        return "Pera";
    })
        .then(function(fruta)
        {
            alert("Segundo alert, Ahora Fruta es " + fruta);
            return "Plátano";
        })
        .then(function(fruta)
        {
            console.log("La fruta final ha sido " + fruta);
        });

    defer.resolve("Melocotón");

}]);