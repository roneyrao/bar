module.exports={
	index:function(req, res, next) { //eslint-disable-line no-unused-vars
		res.render('index', { title: 'Express' });
	}
	,location:function(req, res, next) { //eslint-disable-line no-unused-vars
		res.render('location', { title: 'Express' });
	}
	,about:function(req, res, next) { //eslint-disable-line no-unused-vars
		res.render('about', { title: 'Express' });
	}
};
