/**
 * Created by adminlocal on 27/03/2015.
 */
 var app = angular.module("app",[]);

//nos permite setear la configuracion
app.provider("frutas", function()
{
    var tipo;
    return {
        setFruta: function(value)
        {
            tipo = value;
        },
        $get: function()
        {
            return{
                tipoFruta: "Fruat de tipo" + tipo
            }
        }
    }
});

app.config(function(frutasProvider)
{
    frutasProvider.setFruta(" Ciruela");
});



app.controller("providerController", ["$scope" ,"frutas", function($scope, frutas)
{
    $scope.fruta = frutas.tipoFruta;
}])