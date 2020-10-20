const express = require("express");
const router = new express.Router();

const database = require("../db/db");
const db = database.getDb;

const authentication = require("../controllers/authentication");

router.post("/providerSignup",authentication.providerSignup(db));

router.post("/providerLogin",authentication.providerLogin(db));

module.exports = router;