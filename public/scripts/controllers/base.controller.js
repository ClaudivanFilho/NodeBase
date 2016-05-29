(function() {
  angular.module('MyApp', [])
  .controller('BaseCtrl', BaseCtrl);

  BaseCtrl.$inject = ['User'];

  function BaseCtrl(User) {
    var ba = this;

    ba.user = User.data;
  }
})()
