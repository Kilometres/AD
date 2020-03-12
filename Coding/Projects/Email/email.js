var mailer = require("nodemailer");
var config = require('./config.json')

var tp = mailer.createTransport({
  service: "gmail",
  secure: false,
  port: 25,
  auth: {
    user: config.un,
    pass: config.pw
  },
  tls: {
    rejectUnauthorized: false
  }
});

var mailOpts = {
  from: "boringstuuf@gmail.com",
  to: "yomumashusband@gmail.com",
  subject: "Meow",
  text: "lol"
};

tp.sendMail(mailOpts, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }

  tp.close();
