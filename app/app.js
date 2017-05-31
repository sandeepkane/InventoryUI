var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      title: 'Customer',
      templateUrl: 'partials/customer.html',
      controller: 'customerController'
    })
    .otherwise({
      redirectTo: '/'
    });;
}]);
    