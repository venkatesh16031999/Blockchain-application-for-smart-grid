const passport = require("passport");
const express = require("express");

const router = express.Router();

router.get('/google',passport.authenticate('google', { 
  scope: [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email'
  ] 
}));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/google-auth-failed' }), (req, res) => {
    res.send("Login successfull");
  });

router.get("/google-auth-failed",()=>{
  res.status(401).json("authentication failed");
});

module.exports = router;

