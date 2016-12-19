const rq=require('request');
module.exports={
	index:function(req, res, next) { //eslint-disable-line no-unused-vars
		rq({
			url:req.headers.host+'/api/loc'
			,method:'get'
			,json:{}
		},function(err, resp, body){
			if(err){
				body=[];
				debug('ctrl main '+err);
			}
			res.render('index', { 
				title: 'Express' 
				,header: 'Welcome to bar' 
				,strapline:'straplinestrapline strapline strapline strapline strapline  strapline '
				,locations:body
				,sidebar:'sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar '
			});
		});
	}
	,location:function(req, res, next) { //eslint-disable-line no-unused-vars
		res.render('location', { title: 'Express' });
	}
	,about:function(req, res, next) { //eslint-disable-line no-unused-vars
		res.render('about', { title: 'Express' });
	}
};
