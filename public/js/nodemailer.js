const nodemailer = require('nodemailer');

const sendBtn = document.querySelector("#emailDiv");
$(document).ready(function () {
  sendBtn.addEventListener("click", () => {
    console.log("clicked a button!")
  })
});

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'allene98@ethereal.email',
        pass: 'We2FHqRxTXSpKdtZsc'
    }
});


var mailOptions = {
  from: 'allene98@ethereal.email',
  to: 'ali.hernandez92@gmail.com',
  subject: 'Sending Email using Nodemailer',
  text: `TEST TEST TEST`  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

