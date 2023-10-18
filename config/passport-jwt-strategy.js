const passport = require('passport');
const Doctor = require("../models/doctor");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'Hospital'
}
// secretOrKey is a string or buffer containing the secret (symmetric) or PEM-encoded public key (asymmetric) for verifying the token's signature.

// authenticating the jwt
passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
        console.log("jwt", jwt_payload)
        const doctor = await Doctor.findById(jwt_payload);
        console.log("doc",doctor)
        if (doctor) return done(null, doctor);
        else return done(null, false);
    } catch(err){
        done(err)
    }
}));

module.exports = passport;