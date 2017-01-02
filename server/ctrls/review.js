const dal=require('../../api/dal/rv');
module.exports={
	list:function(req, res, next) { //eslint-disable-line no-unused-vars
		res.render('reviewList', { title: 'Express' });
	}
	,add:function(req, res, next) { //eslint-disable-line no-unused-vars
		res.render('reviewAdd', { title: 'Express' });
	}
	,single:function(req, res, next) { //eslint-disable-line no-unused-vars
		dal.single(req.params.locId, req.params.rvId, function(err, loc){
			if(!err){
				debug('review ctrl.single:'+loc);
				var ctn=loc.reviews[0].reviewText;
			}
			res.render('review', { title: 'Express' , error:err&&err.message, ctn:ctn, locId:req.params.locId, rvId:req.params.rvId});
		});
	}
};
