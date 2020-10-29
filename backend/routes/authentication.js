const express = require("express");
const router = new express.Router();

const authentication = require("../controllers/authentication");

router.post("/providerSignup",authentication.providerSignup);

router.post("/providerLogin",authentication.providerLogin);

module.exports = router;