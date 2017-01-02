var express = require('express');
var router = express.Router();
let ctrl=require('../ctrls/main'); 
//let ctrlUser=require('../../api/ctrls/user'); 

/* GET home page. */
router.get('/', ctrl.index);
router.get('/location/:locId', ctrl.location);
router.get('/about', ctrl.about);
//router.post('/reg.html', ctrlUser.reg);

module.exports = router;
