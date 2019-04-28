const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

const router = express.Router();

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile', {title: 'My Profile | nodetwittie', user: req.user});
});

router.get('/join', isNotLoggedIn, (req, res) => {
    res.render('join', {
        title: 'Sign up | nodetwittie',
        user: req.user,
        joinError: req.flash('joinError'),
    });
});

router.get('/', (req, res, next) => {
    res.render('main', {
        title: 'nodetwittie | nodetwittie',
        twits: [],
        user: req.user,
        loginError: req.flash('loginError'),
    });
});

module.exports = router;