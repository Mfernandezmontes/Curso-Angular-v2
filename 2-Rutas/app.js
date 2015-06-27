var app = angular.module("app",["ngRoute"]);

    app.config(['$routeProvider',function($routeProvider)
    {

        $routeProvider.when("/rutas", {
            templateUrl: "rutas.html",
            contoller: "rutas"
        })
            .when("/otrasrutas", {
            templateUrl: "otrasrutas.html",
            controller: "otrasrutas"
        })
            .otherwise({ redirectTo: "/" });

        }]);


app.controller("rutas", ['$scope', function($scope)
{
    $scope.mensaje = "Mensaje desde rutas";
    $scope.otrocontrolador = "otrasrutas";


}])

app.controller("otrasrutas", ['$scope', function($scope)
{
    $scope.mensaje = "Mensaje desde otras otrasrutas";
    $scope.otrocontrolador = "rutas";

}]);

