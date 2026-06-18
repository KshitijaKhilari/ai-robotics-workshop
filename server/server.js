const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const enquiryRoutes = require("./routes/enquiryRoutes");

dotenv.config();
console.log("Mongo URI Loaded:", process.env.MONGO_URI);
console.log("Attempting MongoDB connection...");
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/enquiry", enquiryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});