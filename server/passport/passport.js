const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/api/v1/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done){
    console.log(profile);
    done(null, profile)
  }
));
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "http://localhost:5000/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));