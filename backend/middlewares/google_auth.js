var GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = (passport) =>{

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
      },(accessToken, refreshToken, profile, cb) => {console.log(profile)
        cb(null,profile);
    }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
          done(null, id);
      });

}