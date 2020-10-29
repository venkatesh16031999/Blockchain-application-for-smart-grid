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
        trim: true,
        unique: true
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
    }
});

const model = mongoose.model("Provider",providerSchema);

module.exports = model;