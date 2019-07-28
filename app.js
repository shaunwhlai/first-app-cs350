var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var nodemailer = require('nodemailer');
var mimeTypes= {
	'.html': 'text/html',
	'.htm': 'text/html',
	'.js': 'text/javascript',
	'.css': 'text/css',
	'.ico': 'image/x-icon',
	'.png': 'image/png',
	'.jpg': 'image/jpg',
	'.gif': 'image/gif',
	'.svg': 'image/svg+xml',
	'.json': 'application/json',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2'
};


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/public/javascripts'));
app.use(express.static(__dirname + '/public/stylesheets'));


// This will handle all GET requests
app.get('*', function(req,res) {
	if (req.url === '/favicon.ico'){
		res.writeHead(200, {'Content-Type': 'image/x-icon'});
		return res.end();
	}

	var pathname = url.parse(req.url).pathname;
	pathname = (pathname ==='/' || pathname === '') ? '/index.htm' : pathname;

	var ext = path.extname(pathname);

	fs.readFile(__dirname + pathname, function(err,data){
		if(err){
			if(ext){
				res.writeHead(404, {'Content-Type': mimeTypes[ext]});
			}
			else{
				res.writeHead(404, {'Content-Type': 'text/html'});
			}
			return res.end("404 Not Found");
		}

		if(ext){
			res.writeHead(200, {'Content-Type': 'test/html'});
		}
		else{
			res.writeHead(200, {'Content-Type': mimeTypes[ext]});
		}
		res.write(data);
		return res.end();
	});
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
