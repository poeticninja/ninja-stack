/**
* Module dependencies.
*/
var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');

// Defaults that you can access when you require this config.
module.exports = {
    root: rootPath,
    port: process.env.PORT || 3000
}