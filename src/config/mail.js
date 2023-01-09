const nodemailer = require("nodemailer");
const { EMAIL, EMAIL_PASSWORD, EMAIL_SERVICE } = process.env;

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD,
  },
});

module.exports = transporter;
