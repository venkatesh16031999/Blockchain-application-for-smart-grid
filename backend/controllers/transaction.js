const Transaction = require('../model/transaction');
const Provider = require('../model/provider');

exports.storeLastTransaction = async (req,res) => {

    const {ebId, timestamp, watts, isAmountPaid} = req.body;

    try{

        const provider = await Provider.findOne({ebId:ebId});

        const newTransaction = new Transaction({ebId, timestamp, watts, isAmountPaid,provider:provider._id});
        await newTransaction.save();

        await provider.transactions.push(newTransaction);

        await provider.save();

        if(!newTransaction.ebId){
            const error = new Error("Transaction is not saved");
            error.statusCode = 401;
            next(error);
        }

        res.status(200).send("transfer sucessfull")
        
        }catch(err){
                err.statusCode = 500;
                next(err);
        }

}

exports.getTransactionList = async (req,res) =>{

    const { id } = req.params;
    try{
        const transactionList = await Provider.aggregate([
            {$match:{ebId:id}},
            {$lookup:{from:"transactions",localField:"transactions",foreignField:"_id",as:"transaction"}},
            {$unwind:"$transaction"},
            {$sort:{"transaction.timestamp":-1}},
            {$project:{transaction:"$transaction"}}
        ])
        
        res.status(200).send({result:transactionList});

    }catch(e){
                err.statusCode = 500;
                next(err);
    }

}
