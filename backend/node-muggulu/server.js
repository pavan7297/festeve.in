require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Razorpay = require("razorpay");
const cors = require("cors");
// const festivalRoutes = require("./routes/festivalRoutes");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: "*", // Not recommended for production
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB ,
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

const RegistrationSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  gender: String,
  phoneNumber: String,
  paymentStatus: String,
});

const Registration = mongoose.model("Registration", RegistrationSchema);

// Define the schema
const saveSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  dateofbirth: { type: String, required: true },
  gender: { type: String, required: true },
  mobile: { type: String, required: true },
});

// Create the model
const SaveModel = mongoose.model("Save", saveSchema);


// Razorpay setup
const razorpay = new Razorpay({
  key_id: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
  key_secret: "YOUR_RAZORPAY_SECRET", // Replace with your Razorpay secret
});

app.post("/save", async (req, res) => {
  try {
    const { firstname, lastname, dateofbirth, gender, mobile } = req.body;
    console.log(":::::::::::::::::req data::::::::::::", req.body);

    if (!firstname || !lastname || !dateofbirth || !gender || !mobile) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const saveInstance = new SaveModel({
      firstname,
      lastname,
      dateofbirth,
      gender,
      mobile,
    });
    console.log("object"+saveInstance);
    await saveInstance.save();
    res
      .status(201)
      .json({ message: "Registration is successful", saved: saveInstance });
  } catch (error) { // Correctly handle the error variable
    console.error("Error adding registration:", error);
    res
      .status(500)
      .json({ error: "Error adding registration data", details: error.message });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { name, age, gender, phoneNumber } = req.body;

    const order = await razorpay.orders.create({
      amount: 100, // Amount in paisa (₹1 = 100 paisa)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    res.json({ orderId: order.id, amount: order.amount });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).send("Error creating order");
  }
});

app.post("/verify-payment", async (req, res) => {
  try {
    const { orderId, paymentId, signature, formDetails } = req.body;

    // Verify payment signature
    const generatedSignature = crypto
      .createHmac("sha256", "YOUR_RAZORPAY_SECRET") // Replace with your Razorpay secret
      .update(orderId + "|" + paymentId)
      .digest("hex");

    if (generatedSignature !== signature) {
      return res
        .status(400)
        .json({ status: "failure", message: "Invalid signature" });
    }

    // Save registration details to the database with payment status
    const newRegistration = new Registration({
      ...formDetails,
      paymentStatus: "Success",
    });

    await newRegistration.save();

    res.json({
      status: "success",
      message: "Payment verified and registration saved",
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    res
      .status(500)
      .json({ status: "failure", message: "Error verifying payment" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
