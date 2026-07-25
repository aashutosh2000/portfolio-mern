// const nodemailer = require("nodemailer");

// const sendEmail = async (name, email, message) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_USER,
//     subject: "📩 New Portfolio Contact Message",

//     html: `
//       <h2>New Contact Form Submission</h2>

//       <p><strong>Name:</strong> ${name}</p>

//       <p><strong>Email:</strong> ${email}</p>

//       <p><strong>Message:</strong></p>

//       <p>${message}</p>
//     `,
//   });
// };

// module.exports = sendEmail;



// const nodemailer = require("nodemailer");

// const sendEmail = async (name, email, message) => {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   // SMTP connection check
//   await transporter.verify();
//   console.log("✅ SMTP Connected");

//   await transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_USER,
//     subject: "📩 New Portfolio Contact Message",
//     html: `
//       <h2>New Contact Form Submission</h2>

//       <p><strong>Name:</strong> ${name}</p>

//       <p><strong>Email:</strong> ${email}</p>

//       <p><strong>Message:</strong></p>

//       <p>${message}</p>
//     `,
//   });

//   console.log("✅ Email Sent Successfully");
// };

// module.exports = sendEmail;


const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
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
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "📩 New Portfolio Contact Message",

    html: `
      <h2>New Contact Form Submission</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `,
  });
};

module.exports = sendEmail;