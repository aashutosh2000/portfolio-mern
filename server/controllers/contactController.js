const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

const saveContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // MongoDB me save
    const contact = new Contact({
      name,
      email,
      message,
    });

    await contact.save();

    // Gmail par email bhejo
    await sendEmail(name, email, message);

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
    });
  } catch (error) {
    console.error(error);
    console.error(error.message);
    console.error(error.stack);

    res.status(500).json({
        success:false,
        message:error.message
    });
  }
};

module.exports = {
  saveContact,
};