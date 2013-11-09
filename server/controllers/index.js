//Render from views folder the index template file.
exports.index = function(req, res) {
	res.render('index', {"title": "Ninja Stack"});
};

//Render from partials folder the partial template file.
exports.partials = function (req, res) {
	var name = req.params.name;
	res.render('partials/' + name);
};