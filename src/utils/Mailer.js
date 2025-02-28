const nodemailer = require("nodemailer");
require('dotenv').config()

const MAILER_EMAIL = process.env.MAILER_EMAIL;
const MAILER_PASSWORD = process.env.MAILER_PASSWORD;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // false for TLS
  auth: {
    user: MAILER_EMAIL,
    pass: MAILER_PASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false, // Ini terkadang diperlukan di shared hosting
  },
});

module.exports = transporter;
