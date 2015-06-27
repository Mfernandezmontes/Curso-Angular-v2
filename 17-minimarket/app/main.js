require.config({
  baseUrl: './app',
  paths: {
    'angular': '../bower_components/angular/angular',
    'angular-route': '../bower_components/angular-route/angular-route'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angular-route': { deps: ['angular']}
  }
});

require(['angular', 'routes/routes'], function(angular, mainRoutes) 
{
    return angular.bootstrap(document, ['app']);
});