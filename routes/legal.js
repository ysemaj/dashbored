var express = require('express');
var router = express.Router();

/* GET legal */

router.get('/', function (req, res, next) {
    res.render('legal/index', { title: 'Legal' });
});

router.get('/privacy', function (req, res, next) {
    res.render('legal/privacy', { title: 'Privacy Policy' });
});

router.get('/investors', function (req, res, next) {
    res.render('legal/investors', { title: 'Investors' });
});

router.get('/payments', function (req, res, next) {
    res.render('legal/payments', { title: 'Payments' });
});

router.get('/terms-and-conditions', function (req, res, next) {
    res.render('legal/terms-and-conditions', { title: 'Terms & Conditions' });
});

router.get('/user-agreement', function (req, res, next) {
    res.render('legal/user-agreement', { title: 'User Agreement' });
});

router.get('/libraries', function (req, res, next) {
    res.render('legal/libraries', { title: 'Open Source Libraries' });
});

router.get('/cookies', function (req, res, next) {
    res.render('legal/cookies', { title: 'Cookies' });
});

router.get('/security', function (req, res, next) {
    res.render('legal/security', {
        title: 'Security'
    });
});

module.exports = router;
