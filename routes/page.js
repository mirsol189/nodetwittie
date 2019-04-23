const express = require('express');

const router = express.Router();

router.get('/profile', (req, res) => {
    res.render('profile', {title: 'My Profile | nodetwittie}', user: null});
});

router.get('/join', (req, res) => {
    res.render('join', {
        title: 'Sign up',
        user: null,
        joinError: req.flash('joinError'),
    });
});

router.get('/', (req, res, next) => {
    res.render('main', {
        title: 'nodetwittie',
        twits: [],
        user: null,
        loginError: req.flash('loginError'),
    });
});

module.exports = router;