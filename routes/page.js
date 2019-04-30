const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const {Post, User} = require('../models');

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
    Post.findAll({
        include: {
            model: User,
            attributes: ['id', 'nickname'],
        },
        order: [['createdAt', 'DESC']],
    })
        .then((posts) => {
            res.render('main', {
                title: 'nodetwittie',
                twits: posts,
                user: req.user,
                loginError: req.flash('loginError'),
            });
        })
        .catch((error) => {
            console.error(error);
            next(error);
        });
});

module.exports = router;