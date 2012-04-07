/*var io = require('socket.io'); */
var express = require('express');
var app = express.createServer();

exports.init = function(port) {
    
    app.configure(function(){
        app.set('views', __dirname + '/views');
    	app.set('view engine', 'ejs');
    	app.use(express.bodyParser());
    	app.use(express.methodOverride());
        app.use(express.logger()); 
    	app.use(express.static(__dirname + '/assets'));
    	app.use(app.router);
    	app.enable("jsonp callback");
    });
    
    app.configure('development', function(){
      app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
    });
    
    app.configure('production', function(){
      app.use(express.errorHandler()); 
    });
    
    app.error(function(err, req, res, next){
      res.render('500.ejs', { locals: { error: err },status: 500 }); 
    });
    
    app.listen(port);
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
    return app; 
}