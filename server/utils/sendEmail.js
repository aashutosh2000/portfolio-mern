const axios = require("axios");

const sendEmail = async (name, email, message) => {
  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Portfolio Contact Form",
          email: "aashutoshsoni2000@gmail.com",
        },
        to: [
          {
            email: "aashutoshsoni2000@gmail.com",
          },
        ],
        replyTo: {
          email: email,
        },
        subject: "📩 New Portfolio Contact",
        htmlContent: `
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Email Sent Successfully");
  } catch (error) {
    console.error(
      "Brevo Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

module.exports = sendEmail;