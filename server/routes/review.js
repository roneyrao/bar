var express = require('express');
var router = express.Router();
let ctrl=require('../ctrls/review'); 

/* GET home page. */
router.get('/:locId', ctrl.list);
router.get('/add', ctrl.add);
router.get('/:locId/:rvId', ctrl.single);

module.exports = router;
