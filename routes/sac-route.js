const express = require('express');
const router  = express.Router();
const sac = require('../models/sac-model');
const nodemailer = require('nodemailer');

router.post('/send-email', (req, res, next) => {  
  let { name, email, message } = req.body;  
  let transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
      user: 'orchestra.medicalgroup@hotmail.com',
      pass: 'Orchestra123456789'
    }
  });
  transporter.sendMail({
    from: 'orchestra.medicalgroup@hotmail.com',
    to: 'orchestra.medicalgroup@hotmail.com',
    subject: `Sac ${name}`,
    text: "",
    html: `<p>${name} ${email} ${message}</p>`
  })
  .then(info => res.status(200).json({ message: "send email", info }))
  .catch(error => console.log(error));
});

module.exports = router;