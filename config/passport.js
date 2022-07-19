const passport = require('passport') 
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt

const Usuario = require('../models/users')

module.exports = passport.use(
    new jwtStrategy(
        {jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET_KEY},
         (jwt_payload,done) => {
           Usuario.findOne({_id:jwt_payload.id})
            .then ( userio => {
                if (userio) {
                    return done(null, userio)
                } 
             
                else {
                    return done(null, false)
                }
            }
                
               
            )
            .catch(error => {
                console.log(error)
                return done(error,false)   
            })
         }
) )
