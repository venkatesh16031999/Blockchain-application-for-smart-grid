const mongoose = require("mongoose");

const db = async () =>{
    try{
        await mongoose.connect("mongodb://mongo:27017/smart_grid_dev",{useUnifiedTopology:true});
        console.log("db connected");
    }catch(e){
        console.log("db not connected : ",e.message);
    }
}

module.exports = db;