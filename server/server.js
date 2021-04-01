const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();
let bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "..", 'build')));

app.get('*', function (req, res) {
 res.sendFile(path.join(__dirname, "..", 'build', 'index.html'));
});

app.listen(PORT);

app.use(cors())

const transporter = nodemailer.createTransport({
    name: "smtp.gmail.com",
    host: "smtp.gmail.com", //replace with your email provider
    port: 587,
    auth: {
      user: process.env.REACT_APP_EMAIL,
      pass: process.env.REACT_APP_PASSWORD
    },
    tls:{
      rejectUnauthorized: false
    }
  });

// verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const subject = req.body.subject
  const message = req.body.message

  console.log(req.body.name)
  const mail = {
    from: name,
    to: process.env.REACT_APP_EMAIL_RECEIVER,
    subject: subject,
    text: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
})