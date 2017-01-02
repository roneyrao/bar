'use strict'
const rv=require('../dal/rv');

function sendJSON(res, status, ctn){
	res.status(status);
	res.json(ctn);
}

module.exports={
	create(req, res){
		req.body.author=req.credential.email;
		rv.create(req.params.locId, req.body
			,function(err, rs){
				if(err){
					debug('rv.create'+err);
					sendJSON(res, 404, err);
				}else{
					sendJSON(res, 200, rs);
				}
			}
		);
	}
	,update(req, res){
		rv.single(req.params.locId, req.params.rvId, function(err, loc){
			if(err){
				sendJSON(res, 500, err);
			}else{
				if(loc.reviews[0].author!=req.credential.author){
					sendJSON(res, 500, new Error('NotAuthor'));
				}else{
					rv.update(req.params.locId, req.params.rvId, req.body.reviewText
						,function(err, rs){
							if(err){
								debug('rv.update'+err);
								sendJSON(res, 404, err);
							}else{
								sendJSON(res, 200, rs);
							}
						}
					);
				}
			}
		});
	}
	,remove(req, res){
		rv.single(req.params.locId, req.params.rvId, function(err, loc){
			if(err){
				sendJSON(res, 500, err);
			}else{
				if(loc.reviews[0].author!=req.credential.author){
					sendJSON(res, 500, new Error('NotAuthor'));
				}else{
					rv.remove(req.params.locId, req.params.rvId
						,function(err, rs){
							if(err){
								debug('rv.remove'+err);
								sendJSON(res, 500, err);
							}else{
								sendJSON(res, 200, rs);
							}
						}
					);
				}
			}
		});
	}
}
