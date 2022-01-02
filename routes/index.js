var express = require('express');
var User = require('../models/User');
var router = express.Router();

const LoginController = require('../controllers/LoginController');


const isLogin = (req, res, next) => {
  try {
      if(req.signedCookies.user_name && req.signedCookies.user_name != ""){
          next();
      }else{
          res.redirect('/login');
      }
  } catch (error) {
      res.redirect('/login');
  }
}

const isLogin1 = (req, res, next) => {
  try {
      if(req.signedCookies.user_name && req.signedCookies.user_name != ""){
          res.redirect('/');
      }else{
        next();
      }
  } catch (error) {
    next();
  }
}

/* GET home page. */
router.get('/', isLogin, function(req, res, next) {
  res.render('index', { title: 'Chat-SocketRoom' });
});

/* GET login page. */
router.get('/login',isLogin1, LoginController.login);
router.post('/login',isLogin1, LoginController.loginByUsername);
router.get('/logout', LoginController.logout);

module.exports = router;
