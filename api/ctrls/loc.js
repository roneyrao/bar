'use strict'

const loc=require('../dal/loc');

function sendJSON(res, status, ctn){
	res.status(status);
	res.json(ctn);
}

module.exports={
	list(req, res){
		loc.list(function(err, rs){
			if(err){
				debug('loc.list error:', err);
				sendJSON(res, 404, err);
			}else{
				sendJSON(res, 200, rs);
			}
		});
	}
	,create(){
	}
	,single(){
	}
	,update(){
	}
	,remove(){
	}
}
