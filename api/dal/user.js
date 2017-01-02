const mgs=require('mongoose');
const md=mgs.model('user');

module.exports={
	create:function(email, pwd, cb){
		const user=new md();
		user.email=email;
		user.setPwd(pwd);
		user.save(function(err, user){
			if(err){
				debug('user.create '+err);
			}
			cb(err, user);
		});
	}
	,login:function(email, pwd, cb){
		if(!email||!pwd){
			const err='no email or password';
			debug('login err: '+err);
			return cb(err, null);
		}
		md.findOne({email:email}, function(err, u){
			if(err){
				debug('login err: '+err);
				cb(err, null);
			}else if(u.validPwd(pwd)){
				cb(err,u);
			}else{
				const err='email and password don\'t match';
				debug('login err: '+err);
				cb(err, null);
			}
		});
	}
};
