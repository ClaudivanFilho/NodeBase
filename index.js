var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var session = require('express-session');
var methodOverride = require('method-override');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
// parser post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// allow put requests
app.use(methodOverride('X-HTTP-Method-Override'));

// define my routes
require('./my_routes')(app);

// CONFIGS OF PASSPORT
require('./config/passport')(app);

if (process.env.NODE_ENV != "TESTING") {
    (require('./config/database')(app)).connect()
}

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
