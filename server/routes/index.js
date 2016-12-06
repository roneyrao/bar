var express = require('express');
var router = express.Router();
let ctrl=require('../ctrls/main'); 

/* GET home page. */
router.get('/', ctrl.index);
router.get('/location', ctrl.location);
router.get('/about', ctrl.about);

module.exports = router;
