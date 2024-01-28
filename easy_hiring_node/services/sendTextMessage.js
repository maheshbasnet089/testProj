const nodemailer = require("nodemailer");

const sendTextEmail = async (options) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: "Khetala <trylaravelmail@gmail.com>",
    to: options.email,
    subject: "Message from Khetala.com",
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendTextEmail;
