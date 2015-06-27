/**
 * Created by adminlocal on 27/03/2015.
 */
var app = angular.module("app", []);

app.controller('homeController', ['$scope', function($scope)
{
    $scope.usuarios = [
        { nombre:'Juan',   telefono:'659382939', edad: '32'},
        { nombre:'Paco',   telefono:'623456794', edad: '21'},
        { nombre:'Amanda', telefono:'697654561', edad: '45'},
        { nombre:'Sergio', telefono:'612373838', edad: '20'},
        { nombre:'Andrés', telefono:'659274727', edad: '37'},
        { nombre:'Pedro',  telefono:'613958478', edad: '50'}
    ];
}])