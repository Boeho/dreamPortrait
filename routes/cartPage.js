var express = require('express');
var router = express.Router();

/* GET cart page. */
router.get('/', function(req, res, next) {
   res.render('user/cartPage', { title: 'Dream Portrait', isDevelopment: process.env.IS_DEVELOPMENT });
});

module.exports = router;
