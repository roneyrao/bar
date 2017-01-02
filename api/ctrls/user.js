'use strict'

const user=require('../dal/user');

function sendJSON(res, status, ctn){
	res.status(status);
	res.json({status:status, msg:ctn});
}
module.exports={
	reg(req, res){
		if(!req.body.email||!req.body.pwd){
			debug('user reg error: no email or pwd');
			sendJSON(res, 400, 'no email or pwd');
			return;
		}
		user.create(req.body.email, req.body.pwd, function(err, user){
			if(err){
				debug('user create error:', err);
				sendJSON(res, 500, err);
			}else{
				sendJSON(res, 200, user.getJwt());
			}
		});
	}
	,login(req, res){
		if(!req.body.email||!req.body.pwd){
			debug('user login error: no email or pwd');
			sendJSON(res, 400, 'no email or pwd');
			return;
		}
		user.login(req.body.email, req.body.pwd, function(err, user){
			if(err){
				sendJSON(res, 401, err);
			}else{
				sendJSON(res, 200, user.getJwt());
			}
		});
	}
}
