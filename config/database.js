var mongoose = require('mongoose');

module.exports = function(app){
  var db = {
    opts : {
      server: { socketOptions: { keepAlive: 1 } }
    },
    connect : function() {
      switch(app.get('env')){
        case 'development':
        mongoose.connect('mongodb://localhost/mydb', this.opts);
        break;
        case 'production':
        // TODO have to be seted
        //mongoose.connect('mongodb://heroku_fzbtzrg6:31ntgrhf3ffq0e7s9dj36jtcnh@ds053164.mlab.com:53164/heroku_fzbtzrg6', this.opts);
        break;
        default:
        throw new Error('Unknown execution environment: ' + app.get('env'));
      }
    }
  }
  return db;
};
