var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');




router.get('/', function(req, res, next) {
   res.render('info/contactUs', { title: 'shopp' });
});

router.post('/submit', (req, res, next) => {
	var fname = req.body.contactFname;
	var lname = req.body.contactLname;
	var email = req.body.contactEmail;
	var message = req.body.contactMessage;



  let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dreamportraitstore@gmail.com',
    pass: '34yiuOH87%$#'
  }
});

let mailOption = {
  from: email,
  to: 'dreamportraitstore@gmail.com',
  subject: 'Dream Portrait Support',
  text: email + message
}

transporter.sendMail(mailOption, (err, data) => {
if(err){
  console.log("error send!");
}else{
  console.log('saccess send!');
}
});

res.end('all good');
});




module.exports = router;

