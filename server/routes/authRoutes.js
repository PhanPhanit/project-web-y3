const express = require('express');
const passport = require('passport');
const router = express.Router();
const {
    register,
    login,
    logout,
    googleLogin
} = require('../controllers/authController');


router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email'], session: false}));
router.get('/google/callback', passport.authenticate('google', {session: false, failureRedirect: `https://localhost:3000/login`}), googleLogin);

router.get('/facebook', passport.authenticate('facebook', {scope: ['publish_actions'], session: false}));
router.get('/facebook/callback', passport.authenticate('facebook', {session: false, failureRedirect: `https://localhost:3000/login`}), (req, res)=>{
    res.send(req.user);
})



module.exports = router;