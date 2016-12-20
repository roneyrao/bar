const mgs=require('mongoose');

const rv=new mgs.Schema({
	auther:String
	,rating:{
		type:Number
		,required:true
		,min:0
		,max:5
	}
	,ctn:String
	,created:{
		type:Date
		,"default":Date.now
	}
});

const oTime=new mgs.Schema({
	days:{
		type:String
		,required:true
	}
	,opening:String
	,closing:String
	,closed:{
		type:Boolean
		,required:true
	}
});
const lc=new mgs.Schema({
	name:{
		type:String
		,required:true
	}
	,address:String
	,rating:{
		type:Number
		,"default":0
		,min:0
		,max:5
	}
	,facilities:[String]
	,coords:{
		type:[Number]
		,index:'2dsphere'
	}
	,openingTimes:[oTime]
	,reviews:[rv]
}, {collection:'locations'});

mgs.model('Location', lc);
