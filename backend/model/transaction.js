const mongoose = require("mongoose");
const { Timestamp } = require("mongodb");
const transactionSchema = new mongoose.Schema({
        watts:{
            type: Number,
            required:true,
        },
        date:{
            type: Timestamp,
            required:true
        },
        ebId:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        isAmountPaid:{
            type: Boolean,
            required: true,
        }
});

const transactionModel = mongoose.model('Transaction',transactionSchema);

module.exports = transactionModel;