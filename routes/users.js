var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/user');
const passport = require('passport')

/* GET users listing. */
router.get('/signup', function (req, res, next) {
   var messageError = req.flash('error')
  res.render('user/signup', {messages: messageError})
});

router.post('/signup',
  check('email').not().isEmpty().withMessage('Please Enter Your Email'),
  check('email').isEmail().withMessage('Please Enter A Vaild Email'),
  check('password').not().isEmpty().withMessage('Please Enter The Passord'),
  check('password').isLength({ min: 6 }).withMessage('Please Enter At Least 6 characters'),
  check('confirm password').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('The Password is not Matching')
    }
    return true;
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      var validationMesseage = []
      for(var i = 0; i<errors.errors.length; i++){
        validationMesseage.push(errors.errors[i].msg)
      }
      req.flash('error', validationMesseage)
      res.redirect('signup')
      return;
    }
    const user = new User({
      email: req.body.email,
      password: new User().hashPassword(req.body.password)
    })

    User.findOne({email: req.body.email}, (err, result)=>{
      if(err){
        console.log(err);
      }
      if (result) {
        req.flash('error', 'This Email Already Exist')
        res.redirect('signup')
        return;
      }
      user.save((err, doc) => {
        if (err) {
          console.log(err);
        }
        res.send(doc)
      })
    })
  })

  router.get('/profile', (req, res, next)=>{
    res.render('user/profile')
  })

  router.get('/signin', (req, res)=>{
    res.render('user/signin')
  })
  
  router.post('/signin', passport.authenticate('local-signin', {
    session: false,
    successRedirect: 'profile',
    failureRedirect: 'signin',
    failureFlash: true
  }))

module.exports = router;
