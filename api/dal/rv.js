'use strict'

const mgs=require('mongoose')
,loc=mgs.model('Location');

module.exports={
	create(locId, obj, cb){
		const n=new loc();
		n.reviews.push({ author:obj.author ,rating:obj.rating ,reviewText:obj.reviewText });
		debug('new review:'+n.reviews[0]);
		loc.update({_id:locId}, {$push:{reviews:n.reviews[0]}}, null, function(err, rs){
			if(err){
				debug('review.create error:', err);
			}
			cb(err, rs);
		});
	}
	,update(locId, rvId, text, cb){
		loc.update({_id:locId, 'reviews.id':rvId}, {$set:{'reviews.$.reviewText':text}}, null, function(err, rs){
			if(err){
				debug('review.update error:', err);
			}
			cb(err, rs);
		});
	}
	,remove(locId, rvId, cb){
		debug('remove:'+locId+' '+rvId);
		loc.update({_id:locId}, {$pull:{reviews:{id:rvId}}}, null, function(err, rs){
			if(err){
				debug('review.remove error:', err);
			}
			cb(err, rs);
		});
	}
}
