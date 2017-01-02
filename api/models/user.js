const mgs=require('mongoose');
const crypto=require('crypto');
const jwt=require('jsonwebtoken');
const user=new mgs.Schema({
	email:{
		type:String
		,required:true
		,unique:true
	}
	,hash:String
	,salt:String
});
user.methods.setPwd=function(pwd){
	this.salt=crypto.randomBytes(16).toString('hex');
	this.hash=crypto.pbkdf2Sync(pwd, this.salt, 1000, 64).toString('hex');
};
user.methods.validPwd=function(pwd){
	return this.hash==crypto.pbkdf2Sync(pwd, this.salt, 1000, 64).toString('hex');
};
user.methods.getJwt=function(){
	let exp=new Date();
	exp.setDate(exp.getDate()+7);
	return jwt.sign({
		_id:this._id
		,email:this.email
		,exp:parseInt(exp/1000)
	}, process.env.secret);
};
mgs.model('user', user);
