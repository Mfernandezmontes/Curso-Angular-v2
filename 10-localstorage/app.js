var app = angular.module("app", ['ngStorage']);

app.controller('storageController', ['$scope','$localStorage', function($scope, $localStorage)
{
	$scope.saved = $localStorage.todos;
	$scope.todos = ($localStorage.todos != null) ? 
					JSON.parse($scope.saved) : 
					[ {val: 'Curso de AngularJS', bool: false}];

	$localStorage.todos = JSON.stringify($scope.todos);


	$scope.addTodo = function() 
	{
		$scope.todos.push({
			val: $scope.todoValue,
			bool: false
		});
		$scope.todoValue = '';
		$localStorage.todos = JSON.stringify($scope.todos);
	};

	$scope.remove = function() 
	{
		//guardamos las tareas anteriores
		var oldTodos = $scope.todos;
		//limpiamos todos
		$scope.todos = [];
		//recorremos oldtodos
		angular.forEach(oldTodos, function(todo)
		{
			//si todo es false empujamos 
			if(todo.bool !== false)
			{
				$scope.todos.push(todo);
			}
		});
		//seteamos de nuevo todos con los valores actualizados
		$localStorage.todos = JSON.stringify($scope.todos);
	};

}]);