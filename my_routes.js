var index = require('./routes/index');
var book = require('./routes/book');
var comment = require('./routes/comment');

module.exports = function(app) {

    /**
     * Rotas de documentação, home e backdoor
     */
    app.use('/', index);
    /**
     * Api book
     */
    app.use('/api/book', book);
    /**
     * Api comment
     */
    app.use('/api/comment', comment);

    return app;
}
