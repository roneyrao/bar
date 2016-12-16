const router =require('express').Router() 
,ctrlLoc=require('../ctrls/loc')
,ctrlRv=require('../ctrls/rv');

router.get('loc', ctrlLoc.listByDistance);
router.post('loc', ctrlLoc.create);
router.get('loc/:locId', ctrlLoc.single);
router.put('loc/:locId', ctrlLoc.update);
router.delete('loc/:locId', ctrlLoc.remove);

router.post('loc/:locId/rv', ctrlRv.create);
router.get('loc/:locId/rv/:rvId', ctrlRv.single);
router.put('loc/:locId/rv/:rvId', ctrlRv.update);
router.delete('loc/:locId/rv/:rvId', ctrlRv.remove);

module.exports=router;
