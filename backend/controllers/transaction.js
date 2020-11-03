const Transaction = require('../model/transaction');

exports.storeLastTransaction = async (req,res) => {

    const {ebId, timestamp, watts, isAmountPaid} = req.body;

    try{

        const newTransaction = new Transaction({ebId, timestamp, watts, isAmountPaid});
        await newTransaction.save();

        if(!newTransaction.ebId){
            const error = new Error("Transaction is not saved");
            error.statusCode = 401;
            next(error);
        }
        

        
        }catch(err){
            if(!err.statusCode){
                err.statusCode = 500;
                next(err);
            }
        }

}
