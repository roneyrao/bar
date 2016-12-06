module.exports={
	list:function(req, res, next) { //eslint-disable-line no-unused-vars
		res.render('reviewList', { title: 'Express' });
	}
	,add:function(req, res, next) { //eslint-disable-line no-unused-vars
		res.render('reviewAdd', { title: 'Express' });
	}
};
