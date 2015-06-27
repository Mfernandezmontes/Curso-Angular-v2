/**
 * Created by adminlocal on 28/03/2015.
 */

app.controller("homeController", ["$scope","ServiceUsers",function($scope, ServiceUsers)
{
    $scope.usuarios = ServiceUsers.usuarios();
}]);

