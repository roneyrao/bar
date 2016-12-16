'use strict'

const mgs=require('mongoose')
,loc=mgs.model('Location');

function sendJSON(res, status, ctn){
	res.status(status);
	res.json(status);
}

module.exports={
	listByDistance(req, res){
		loc.find(function(err, rs){});
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
