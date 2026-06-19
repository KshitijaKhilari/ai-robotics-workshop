const express = require("express");
const router = express.Router();

const Enquiry = require("../models/Enquiry");

router.post("/", async (req, res) => {
    try {
        console.log("📩 New Enquiry Received:");
        console.log(req.body);

        const { name, email, phone } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const emailRegex = /^\S+@\S+\.\S+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email address",
            });
        }

        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                success: false,
                message: "Phone number must be 10 digits",
            });
        }

        // Check duplicate registration
        const existingEnquiry = await Enquiry.findOne({
            $or: [{ email }, { phone }],
        });

        if (existingEnquiry) {
            return res.status(400).json({
                success: false,
                message:
                    "You have already registered for this workshop.",
            });
        }

        const enquiry = await Enquiry.create({
            name,
            email,
            phone,
        });

        console.log("✅ Saved to MongoDB:", enquiry);

        return res.status(201).json({
            success: true,
            message:
                "🎉 Registration Successful! Our team will contact you shortly with workshop details.",
            data: enquiry,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
});

module.exports = router;