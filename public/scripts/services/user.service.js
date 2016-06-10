(function(){
  angular.module('MyApp')
  .factory('User', userService);

  userService.$inject = ['$http']

  function userService($http) {

    var service = {}

    service.data = [];

    service.get = get;

    service.get();
    return service;

    function get() {
      $http.get('/user', [])
      .success(function(response) {
        console.log(response);
        service.data = response;
      })
      .error(function(data) {
        console.log(data);
      });
    }
    
  }
})()
