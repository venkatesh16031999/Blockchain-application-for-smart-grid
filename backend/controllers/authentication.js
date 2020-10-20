const bcrypt = require("bcrypt");


exports.providerSignup = (db) => async (req, res,next) => {
    const { name, email, city, mobileNumber, password, confirmPassword } = req.body;
    try{

    const encryptedPassword = await bcrypt.hash(password,8);

    const user = await db().collection("sellerAuth").insertOne({
        name,
        email,
        city,
        mobileNumber,
        password:encryptedPassword
    });

    if(!user){
        const error = new Error("Registration fails");
        error.statusCode = 401;
        next(error);
    }

    res.status(201).json("data:'Registration successfull'");

    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
            next(err);
        }
    }

}

exports.providerLogin = (db) => async (req, res,next) => {
    const { email, password } = req.body;
    try{
    
    const user = await db().collection("sellerAuth").findOne({email:email},{fields:{email:1,password:1,_id:0}});
    const decryptedPassword = await bcrypt.compare(password,user.password);

     if(!decryptedPassword){
        const error = new Error("Login Failed, Incorrect Email/Password");
        error.statusCode = 401;
        next(error);
    }else{
        res.status(201).json("Login sucessfull");
    }
        
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
            next(err);
        }
    }

}