/**
* Module dependencies.
*/
var express = require('express'),
	config = require('./config'),
	swig = require('swig');

module.exports = function(app) {
	app.set('showStackError', true);

	//Prettify HTML
	app.locals.pretty = true;

	//If the application is started in production or other environments that are not development run this block of code.
	if(app.settings.env != 'development') {
		//View templates templates will be cached in production environment.
		app.set('view cache', true );
		//Sends compressed version of json,css,html,text in production.
		app.use(express.compress());
	}

	//Setting the fav icon and static folder
	app.use(express.favicon());
	app.use(express.static(config.root + '/public'));

	app.use(express.logger('dev'));

	//Set views path, template engine and default layout.
	app.set('view engine', 'html');
	app.engine('html', swig.renderFile);
	app.set('views', config.root + '/server/views');


	//Enable jsonp
	app.enable("jsonp callback");

	//bodyParser should be above methodOverride
	app.use(express.bodyParser());
	app.use(express.methodOverride());


	//routes should be at the last
	app.use(app.router);

	//Assume "not found" in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
	app.use(function(err, req, res, next) {
		//Treat as 404
		if (~err.message.indexOf('not found')) return next();

		//Log it
		console.error(err.stack);

		//Error page
		res.status(500).render('500', {
			error: err.stack
		});
	});

	//Assume 404 since no middleware responded
	app.use(function(req, res, next) {
		res.status(404).render('404', {
			url: req.originalUrl,
			error: 'Not found'
		});
	});

};
