/**
 * Created by adminlocal on 27/03/2015.
 */

var app = angular.module("app", []);

app.service('ServiceUsers',['$http','$q',function($http,$q)
{
        this.getUsers = function()
        {
            var defer = $q.defer();

            $http.get("data.json")
                .success(function(data)
                 {
                    //son devueleve
                    defer.resolve(data);
                })
                .error(function(data)
                {
                    defer.reject(data);
                })


            return defer.promise;
        }
}])

app.controller('httpController',['$scope','ServiceUsers', function($scope, ServiceUsers)
{

    var promesa = ServiceUsers.getUsers();
    //console.log(promesa);

    promesa.then(function(users)
    {
        $scope.usuarios = users;
    }),
    function(error){
        alert("error" + error);
    }

}])