'use strict'

const mgs=require('mongoose')
,loc=mgs.model('Location');

module.exports={
	list(cb){
		loc.find(function(err, rs){
			if(err){
				debug('loc.find error:', err);
			}
			cb(err, rs);
		});
	}
	,create(){
	}
	,single(id, cb){
		loc.findById(id, function(err, rs){
			if(err){
				debug('loc.findById error:', err);
			}
			cb(err, rs);
		});
	}
	,update(){
	}
	,remove(){
	}
}
