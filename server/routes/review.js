var express = require('express');
var router = express.Router();
let ctrl=require('../ctrls/review'); 

/* GET home page. */
router.get('/', ctrl.list);
router.get('/add', ctrl.add);

module.exports = router;
