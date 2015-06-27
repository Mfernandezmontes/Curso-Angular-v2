/**
 * Created by adminlocal on 27/03/2015.
 */

var app = angular.module("app", []);

//las factorias son singleton
app.factory("FactoryUsers", function()
{
    return{
        usuarios: [{
                id : 0,
                nombre : "israel parra",
                edad: "33"
            },
            {
                id : 2,
                nombre : "andres parra",
                edad: "33"
            },
            {
                id : 3,
                nombre : "paco parra",
                edad: "33"
            },
            {
                id : 4,
                nombre : "jose parra",
                edad: "33"
            },
            {
                id : 5,
                nombre : "manuel parra",
                edad: "33"
            }

        ]
    }
})

app.controller("factoriaController",["$scope","FactoryUsers",function($scope,FactoryUsers){

    $scope.usuarios = FactoryUsers.usuarios;

}])