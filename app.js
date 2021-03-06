require('dotenv').load();
var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('bar');

require('./api/models/db');
var index = require('./server/routes/index');
var review = require('./server/routes/review');
var api = require('./api/routes');

var app = express();

// view engine setup
global.debug=debug;
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');
app.locals.FILE_SFX=app.get('env')=='product'?'.min':'';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')('stylesheets', {
	pathRoot:path.join(__dirname, 'public')
	,dest:'css'
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/review', review);
app.use('/api', api);

//app.use(function(req, res, next){//eslint-disable-line no-unused-vars
//	res.sendFile(path.join(__dirname, 'public', 'reg.html'));
//});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {//eslint-disable-line no-unused-vars
	if(err.name=='unauthorized'){
		res.status(401);
		res.json({msg:err.name+':'+err.message});
	}
	next(err);
});
app.use(function(err, req, res, next) {//eslint-disable-line no-unused-vars
	// render the error page
	res.status(err.status || 500);
	if(req.path.startsWith('/api')){
		res.json({msg:err.message, err:err});
	}else{
		// set locals, only providing error in development
		res.locals.message = err.message;
		res.locals.error = req.app.get('env') === 'development' ? err : {};
		res.render('error');
	}
});

module.exports = app;
