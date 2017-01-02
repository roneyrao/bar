//const rq=require('request');
const loc=require('../../api/dal/loc');
module.exports={
	index:function(req, res, next) { //eslint-disable-line no-unused-vars
		//rq({
		//	url:req.protocol+'://'+req.headers.host+'/api/loc'
		//	,method:'get'
		//	,json:{}
		//},function(err, resp, body){
		loc.list(function(err, rs){
			if(err){
				rs=[];
				debug('ctrl main '+err);
			}
			res.render('index', { 
				title: 'Express' 
				,header: 'Welcome to bar' 
				,strapline:'straplinestrapline strapline strapline strapline strapline  strapline '
				,locations:rs
				,sidebar:'sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar '
			});
		});
	}
	,location:function(req, res, next) { //eslint-disable-line no-unused-vars
		loc.single(req.params.locId, function(err, rs){
			if(err){
				rs=[];
				debug('ctrl location '+err);
			}
			res.render('location', { 
				title: 'Express' 
				,header: 'Welcome to bar' 
				,strapline:'straplinestrapline strapline strapline strapline strapline  strapline '
				,location:rs
				,sidebar:'sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar '
			});
		});
	}
	,about:function(req, res, next) { //eslint-disable-line no-unused-vars
		res.render('about', { title: 'Express' });
	}
};
