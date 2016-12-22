'use strict'

const mgs=require('mongoose')
,loc=mgs.model('Location');

module.exports={
	create(obj, cb){
		loc.create(obj, function(err, rs){
			if(err){
				debug('loc.create error:', err);
			}
			cb(err, rs);
		});
	}
	,update(){
	}
	,remove(){
	}
}
