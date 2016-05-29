var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  provider : String,
  id : String,
  displayName : String,
  name : {
    familyName : String,
    givenName : String,
    middleName : String
  },
  emails : [
    {
      value : String,
      type : String
    }
  ],
  photos : [
    {
      value : String
    }
  ]

});

var User = mongoose.model('User', userSchema);
module.exports = User;
