const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/user')


passport.use('local-signin', new localStrategy({
    userNameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
(req, email, password, done)=>{
    
    User.findOne({email: email}, (err, user)=>{
        if(err){
            return done(err)
        }
        if(! user){
            return done(null, flase, req.flash('signinError', 'this user not found'))
        }
        if(! user.comparPassport(password)){
            return done(null, false, req.flash('signinError', 'wrong password'))
        }
        return done(null, user)
    })
}))