define(['modules/app'], function (app) 
{
    app.factory('Books', ['$resource', function ($resource) 
    {
        return $resource('app/api/books.php/:bookId', {bookId: '@bookId'}, 
        { 
        	//actualiza un libro
			update: { 
				method: 'PUT'
			},
			//obtiene todos los libros
			get: { 
				method: 'GET'
			},
			//obtiene un libro
			find: { 
				method: 'GET', 
				params: {id: '@bookId'}
			},
			//crea un nuevo libro
			save: {
				method: 'POST'
			},
			//elimina un libro
			remove: {
				method: 'DELETE', 
				params: {id: '@bookId'}
			}
		});
    }]);
});