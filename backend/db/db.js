const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://mongo:27017",{useUnifiedTopology:true});
let database;

exports.run = async () => {
    try{
        await client.connect();
        database = await client.db("smart_grid_dev");
        console.log("Database connected");
    }catch(e){
        console.log(e.message);
    }
}

exports.getDb = () => {
    return database;
};
