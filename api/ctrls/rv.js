'use strict'

const mgs=require('mongoose');

function sendJSON(res, status, ctn){
	res.status(status);
	res.json(ctn);
}

module.exports={
	create(){
	}
	,single(){
	}
	,update(){
	}
	,remove(){
	}
}
