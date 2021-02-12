const mongoose = require("mongoose");
const providerSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    city:{
        type:String,
        required: true,
        trim: true
    },
    number: {
        type:Number,
        required: true,
        trim: true,
        unique: true
    },
    ebId:{
        type:String,
        required: true,
        trim: true,
        unique: true
    },
    accountAddress:{
        type:String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    transactions:[{type: mongoose.Schema.Types.ObjectId,ref:'Transaction'}]
});

const model = mongoose.model("Provider",providerSchema);

module.exports = model;