/**
* Module dependencies.
*/

module.exports = function(app) {
	//Require Index of all non api and model routes.
	var routes = require('../controllers/index');
	//Index route
	app.get('/', routes.index);
	//Partials route to the server directory for Angular. Not the Public. Comment or remove this line to handle the partials on the client side.
	app.get('/views/partials/:name', routes.partials);
	//Redirect all others to the index (HTML5 history). Remove this if you don't want Angular to handle all routes.
	app.get('*', routes.index);
};
