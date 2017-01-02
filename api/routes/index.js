const router =require('express').Router() 
,ctrlLoc=require('../ctrls/loc')
,ctrlRv=require('../ctrls/rv')
,ctrlUser=require('../ctrls/user')
,jwt=require('jsonwebtoken');

function parseCredential(req){
	let auth=req.get('authorization');
	if(auth){
		auth=auth.match(/Bearer (.+)/);
		if(auth){
			return jwt.verify(auth[1], process.env.secret);
		}
	}
}
function authenticate(req, res, next){
	let cred=parseCredential(req);
	if(cred){
		req.credential=cred;
		next();
	}else{
		next(new Error('unauthorized'));
	}
}

router.get('/loc', ctrlLoc.list);
router.post('/loc', ctrlLoc.create);
router.get('/loc/:locId', ctrlLoc.single);
router.put('/loc/:locId', ctrlLoc.update);
router.delete('/loc/:locId', ctrlLoc.remove);

router.post('/loc/:locId/rv', authenticate, ctrlRv.create);
router.put('/loc/:locId/rv/:rvId', authenticate, ctrlRv.update);
router.delete('/loc/:locId/rv/:rvId', authenticate, ctrlRv.remove);

router.post('/reg', ctrlUser.reg);
router.post('/login', ctrlUser.login);

module.exports=router;
