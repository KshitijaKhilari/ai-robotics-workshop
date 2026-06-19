const Enquiry = require("../models/Enquiry");

const submitEnquiry = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check for duplicate email or phone
    const existingEnquiry = await Enquiry.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingEnquiry) {
      return res.status(400).json({
        success: false,
        message: "You have already registered for this workshop.",
      });
    }

    // Save enquiry
    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful!",
      data: enquiry,
    });

  } catch (error) {
    console.error("Enquiry Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};

module.exports = {
  submitEnquiry,
};