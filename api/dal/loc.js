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
	,create(obj, cb){
		loc.create(obj, function(err, rs){
			if(err){
				debug('loc.create error:', err);
			}
			cb(err, rs);
		});
	}
	,single(id, cb){
		loc.findById(id, function(err, rs){
			if(err){
				debug('loc.findById error:', err);
			}
			debug('loc.findById :', rs);
			cb(err, rs);
		});
	}
	,update(){
	}
	,remove(id, cb){
		loc.remove({_id:id}, function(err, rs){
			if(err){
				debug('loc.remove error:', err);
			}
			debug('loc.remove :', rs);
			cb(err, rs);
		});
	}
}
