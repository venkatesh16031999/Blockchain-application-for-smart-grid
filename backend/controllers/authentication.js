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
        console.log(err.message);
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
    const decryptedPassword = await bcrypt.compare(password,user.password);

     if(!decryptedPassword){
        const error = new Error("Login Failed, Incorrect Email/Password");
        error.statusCode = 401;
        next(error);
    }else{

        const result = {
            ebId: user.ebId
        }

        res.status(201).json(result);
    }
        
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
            next(err);
        }
    }

}

exports.getProvider = async (req, res,next) => {
    const { ebId } = req.params;
    try{
    const user = await Provider.find({ebId:ebId});
    console.log(user);

     if(!user){
        const error = new Error("User not found");
        error.statusCode = 401;
        next(error);
    }

        res.status(201).json({result: user});
        
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
            next(err);
        }
    }

}


exports.getAllProvider = async (req, res,next) => {
    try{
    const user = await Provider.find();
    console.log(user);

     if(!user){
        const error = new Error("Provider not found");
        error.statusCode = 401;
        next(error);
    }

        res.status(201).json({result: user});
        
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
            next(err);
        }
    }

}

exports.verifyProvider = async (req, res,next) => {
    try{

    const { id } = req.params;
    await Provider.updateOne({ebId: id},{isVerified: true});
    const provider = await Provider.find();
    res.status(201).json({result: provider});
        
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
            next(err);
        }
    }

}
