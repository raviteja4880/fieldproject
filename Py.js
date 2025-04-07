const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required: true,
        match: /^\d{16}$/,  // ✅ Ensures only 16-digit numbers
    },
    cardHolder: {
        type: String,
        required: true,
        trim: true
    },
    expiryDate: {
        type: String,
        required: true,
        match: /^(0[1-9]|1[0-2])\/\d{2}$/  // ✅ Ensures MM/YY format
    },
    cvv: {
        type: String,
        required: true,
        match: /^\d{3}$/  // ✅ Ensures 3-digit CVV
    }
}, { timestamps: true });

module.exports = mongoose.model("Log", PaymentSchema);
