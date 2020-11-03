const express = require("express");
const router = new express.Router();

const transaction = require("../controllers/transaction");

router.post("/storeLastTransaction",transaction.storeLastTransaction);


module.exports = router;