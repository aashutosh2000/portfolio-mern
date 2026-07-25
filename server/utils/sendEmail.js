const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 465,
  secure: true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});

const sendEmail = async (name, email, message) => {
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

  await transporter.verify();

  console.log("SMTP Connected");

  await transporter.sendMail({
    from: '"Portfolio" <aashutoshsoni2000@gmail.com>',
    to: "aashutoshsoni2000@gmail.com",
    subject: "New Contact",

    html: `
      <h2>New Contact</h2>

      <p>Name : ${name}</p>

      <p>Email : ${email}</p>

      <p>Message : ${message}</p>
    `,
  });

  console.log("Mail Sent");
};

module.exports = sendEmail;