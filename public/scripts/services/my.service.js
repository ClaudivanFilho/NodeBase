(function(){
  angular.module('MyApp')
  .factory('MyService', myService);

  myService.$inject = ['$http']

  function myService($http) {

    var service = {}

    service.data = [];

    service.get = get;
    service.getAll = getAll;
    service.create = create;
    service.edit = edit;
    service.remove = remove;

    service.getAll();
    return service;

    function get(id) {
      for (var i = 0; i < service.data.length; i++) {
        if (service.data[i]._id == id) {
          return i;
        }
      }
      return null;
    }

    function getAll() {
      $http.get('url', [])
      .success(function(data) {
        service.data = data;
      })
      .error(function(data) {
        console.log(data);
      });
    }

    function create(data) {
      $http.post('url', data)
      .success(function(response) {
        service.data.push(data);
        //document.getElementById("form").reset();
        alert(response);
      })
      .error(function(data) {
        console.log(data);
      });
    }

    function edit(data) {
      $http.put('url', data)
      .success(function(response) {
        var indice = service.get(data._id);
        service.data[indice] = response;
        alert("Editado");
      })
      .error(function(data) {
        console.log(data);
      });
    }

    function remove() {
      $http.delete('url', data)
      .success(function(response) {
        var indice = service.get(data._id);
        service.data.splice(indice, 1);
        condirm(response);
        window.location.href = "/";
      })
      .error(function(data) {
        console.log(data);
      });
    }
  }
})()
