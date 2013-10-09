var app = angular.module('myApp', [])

app.run(function($rootScope){
  $rootScope.name = 'Josh'
})

app.controller('MyController', function($scope){
  $scope.person = {
    name: 'Joshua Wilborn'
  }
})
