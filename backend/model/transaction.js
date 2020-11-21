const mongoose = require("mongoose");
const { Timestamp } = require("mongodb");
const transactionSchema = new mongoose.Schema({
        watts:{
            type: Number,
            required:true,
        },
        timestamp:{
            type: Number,
            required:true
        },
        ebId:{
            type: String,
            required: true,
            trim: true
        },
        isAmountPaid:{
            type: Boolean,
            required: true,
        },
        provider:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Provider'
        }
});

const transactionModel = mongoose.model('Transaction',transactionSchema);

module.exports = transactionModel;