'use strict'
const rv=require('../dal/rv');

function sendJSON(res, status, ctn){
	res.status(status);
	res.json(ctn);
}

module.exports={
	create(req, res){
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
	,remove(req, res){
		rv.remove(req.params.locId, req.params.rvId
			,function(err, rs){
				if(err){
					debug('rv.remove'+err);
					sendJSON(res, 404, err);
				}else{
					sendJSON(res, 200, rs);
				}
			}
		);
	}
}
