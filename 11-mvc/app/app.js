/**
 * Created by adminlocal on 28/03/2015.
 */
var app = angular.module("app", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider)
{
    $routeProvider.when("/",{
        templateUrl: "app/templates/home.html",
        controller: "homeController"
    });
}])