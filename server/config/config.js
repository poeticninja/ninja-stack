/**
* Module dependencies.
*/
var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	root: rootPath,
	controller: rootPath + "/server/controllers",
	port: process.env.PORT || 3000
}
