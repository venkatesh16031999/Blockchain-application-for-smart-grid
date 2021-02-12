const express = require("express");
const router = new express.Router();

const transaction = require("../controllers/transaction");

router.post("/storeLastTransaction",transaction.storeLastTransaction);
router.get("/getTransactionList/:id",transaction.getTransactionList);

module.exports = router;