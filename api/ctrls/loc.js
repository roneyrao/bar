'use strict'

const mgs=require('mongoose')
,loc=mgs.model('Location');

function sendJSON(res, status, ctn){
	res.status(status);
	res.json(ctn);
}

module.exports={
	list(req, res){
		loc.find(function(err, rs){
			if(err){
				debug('loc.find error:', err);
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
