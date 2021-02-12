const express = require("express");
const router = new express.Router();

const authentication = require("../controllers/authentication");

router.post("/providerSignup",authentication.providerSignup);

router.post("/providerLogin",authentication.providerLogin);

router.get("/getProvider/:ebId",authentication.getProvider);

router.get("/getAllProvider",authentication.getAllProvider);

router.put("/verifyProvider/:id",authentication.verifyProvider);

module.exports = router;