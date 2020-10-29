const Provider = require("../model/provider");
const bcrypt = require("bcrypt");


exports.providerSignup = async (req, res,next) => {
    const { name, email, city, number, password, accountAddress, ebId} = req.body;
    try{

    const encryptedPassword = await bcrypt.hash(password,8);

    const provider = new Provider({
        name,
        email,
        city,
        number,
        password:encryptedPassword,
        accountAddress,
        ebId
    });

    const providerData = await provider.save();     

    if(!providerData){
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

exports.providerLogin = async (req, res,next) => {
    const { email, password } = req.body;
    try{
    const user = await Provider.findOne({email:email});
    console.log(user);
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