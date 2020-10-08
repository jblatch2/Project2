const nodemailer = require("nodemailer");

const sendBtn = document.querySelector("#emailDiv");
$(document).ready(() => {
  sendBtn.addEventListener("click", () => {
    console.log("clicked a button!");
  });
});

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "allene98@ethereal.email",
    pass: "We2FHqRxTXSpKdtZsc"
  }
});

const mailOptions = {
  from: "allene98@ethereal.email",
  to: "ali.hernandez92@gmail.com",
  subject: "Sending Email using Nodemailer",
  text: "TEST TEST TEST"
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
