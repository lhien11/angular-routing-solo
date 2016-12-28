var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/potato', {
      templateUrl: '/views/templates/potato.html',
      controller: 'PotatoController',
      controllerAs: 'potato'
    })
    .when('/pikachu', {
      templateUrl: '/views/templates/pikachu.html',
      controller: 'PikachuController',
      controllerAs: 'pikachu'
    })
    .otherwise({
      redirectTo: 'home'
    });

  $locationProvider.html5Mode(true);
}]);

app.controller('HomeController', ['$http', function($http) {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";

  // server-direct route to /home
  $http.get('/info').then(function(response) {
    console.log(response.data);
  });

}]);

app.controller('PotatoController', function() {
  console.log('potato controller running');
  var self = this;
  self.message = "Potato controller is the best!";

});

app.controller('PikachuController', function() {
  console.log('pikachu controller is running');
  var self = this;
  self.message = "Pikachu is an icon!";
});
