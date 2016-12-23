'use strict'

const mgs=require('mongoose')
,loc=mgs.model('Location');

module.exports={
	create(locId, obj, cb){
		loc.findOneAndUpdate({_id:locId}, {$push:{reviews:obj}}, null, function(err, rs){
			if(err){
				debug('review.create error:', err);
			}
			cb(err, rs);
		});
	}
	,update(locId, text, cb){
		loc.findOneAndUpdate({_id:locId}, {$set:{'reviews.$.reviewText':text}}, null, function(err, rs){
			if(err){
				debug('review.create error:', err);
			}
			cb(err, rs);
		});
	}
	,remove(){
	}
}
