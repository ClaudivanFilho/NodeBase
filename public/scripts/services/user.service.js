(function(){
  angular.module('MyApp')
  .factory('User', userService);

  userService.$inject = ['$http']

  function userService($http) {

    var service = {}

    service.data = [];

    service.get = get;
    service.create = create;
    service.edit = edit;
    service.remove = remove;

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

    function create(data) {
      $http.post('/user', data)
      .success(function(response) {
        alert(response);
      })
      .error(function(data) {
        console.log(data);
      });
    }

    function edit(data) {
      $http.put('/user', data)
      .success(function(response) {
        alert("Editado");
      })
      .error(function(data) {
        console.log(data);
      });
    }

    function remove() {
      $http.delete('/user', data)
      .success(function(response) {
        condirm(response);
        window.location.href = "/";
      })
      .error(function(data) {
        console.log(data);
      });
    }
  }
})()
