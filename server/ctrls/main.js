module.exports={
	index:function(req, res, next) { //eslint-disable-line no-unused-vars
		res.render('index', { 
			title: 'Express' 
			,header: 'Welcome to bar' 
			,strapline:'straplinestrapline strapline strapline strapline strapline  strapline '
			,locations:require('../mods/locs.json')
			,sidebar:'sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar '
		});
	}
	,location:function(req, res, next) { //eslint-disable-line no-unused-vars
		res.render('location', { title: 'Express' });
	}
	,about:function(req, res, next) { //eslint-disable-line no-unused-vars
		res.render('about', { title: 'Express' });
	}
};
