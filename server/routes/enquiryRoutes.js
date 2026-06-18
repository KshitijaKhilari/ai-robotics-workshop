const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
console.log("📩 New Enquiry Received:");
console.log(req.body);

const { name, email, phone } = req.body;

// Validation
if (!name || !email || !phone) {
return res.status(400).json({
success: false,
message: "All fields are required",
});
}

// Email validation
const emailRegex = /^\S+@\S+.\S+$/;

if (!emailRegex.test(email)) {
return res.status(400).json({
success: false,
message: "Invalid email address",
});
}

// Phone validation
const phoneRegex = /^[0-9]{10}$/;

if (!phoneRegex.test(phone)) {
return res.status(400).json({
success: false,
message: "Phone number must be 10 digits",
});
}

return res.status(200).json({
success: true,
message: "Enquiry submitted successfully",
data: {
name,
email,
phone,
},
});
});

module.exports = router;
