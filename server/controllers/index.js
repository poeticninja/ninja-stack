exports.index = function(req, res) {
	res.render('index', {"title": "Ninja Stack"});
};

exports.partials = function (req, res) {
	var name = req.params.name;
	res.render('partials/' + name);
};