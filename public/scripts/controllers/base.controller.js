(function() {
  angular.module('MyApp', [])
  .controller('BaseCtrl', BaseCtrl);

  BaseCtrl.$inject = ['User'];

  function BaseCtrl(User, socket) {
    var ba = this;

    ba.user = User;


  }
})()
