var express = require('express');
var router = express.Router();
const message=require('./users');

const userModel = require("./users");
const nodemailer = require('nodemailer');

// Nodemailer setup (using Gmail as an example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yft7474@gmail.com',    
    pass: 'vcda fkpw wjkv wrmt',
  }
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/send',async function(req,res){
  res.render('index');
  const createdmessage=await message.create({
    name:req.body.name,
    email:req.body.email,
    subject:req.body.subject,
    msg:req.body.msg
  });

  console.log(createdmessage);
  // L23

  // Set up email options (what will be sent to your email)
  const mailOptions = {
    from: 'yft7474@gmail.com',  // Your email address
    to: 'dheerajharode2003@gmail.com',    // Your email address or recipient email
    subject: 'New Message from Portfolio Contact',  // Email subject
    text: `You have a new message from your portfolio contact.
      Name: ${createdmessage.name}
      Subject: ${createdmessage.subject}
      Email: ${createdmessage.email}
      Message:${createdmessage.msg}
    `,  // The message content
  };

  // Send email after message is created
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

module.exports = router;
