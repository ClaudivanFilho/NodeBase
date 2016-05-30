(function() {
  angular.module('MyApp', ['btford.socket-io'])
  .controller('BaseCtrl', BaseCtrl);

  BaseCtrl.$inject = ['User', 'socket'];

  function BaseCtrl(User, socket) {
    var ba = this;

    ba.user = User;
    ba.message = "";
    ba.messages = [];

    ba.send = function() {
      console.log("send");
      var userName = ba.user.data.displayName;
      socket.emit('chat message', {
        msg : ba.message,
        name : userName ? userName : "Anônimo"
      });
      ba.message = "";
    }

    socket.on('chat message', function (msg) {
      ba.messages.push(msg);
    });
  }
})()
