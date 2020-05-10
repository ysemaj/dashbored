var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'dashbored'
  });
});

router.get('/about', function (req, res, next) {
  res.render('about', {
    title: 'About'
  });
});

router.get('/awards', function (req, res, next) {
  res.render('awards', {
    title: 'Awards'
  });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'Contact'
  });
});

router.get('/customers', function (req, res, next) {
  res.render('customers', {
    title: 'Customers'
  });
});

router.get('/faqs', function (req, res, next) {
  res.render('faqs', {
    title: 'Frequently Asked Questions'
  });
});

router.get('/forgot-password', function (req, res, next) {
  res.render('forgot-password', {
    title: 'Forgot Password'
  });
});

router.get('/news', function (req, res, next) {
  res.render('news', {
    title: 'News'
  });
});

router.get('/pricing', function (req, res, next) {
  res.render('pricing', {
    title: 'Pricing'
  });
});

router.get('/register', function (req, res, next) {
  res.render('register', {
    title: 'Register'
  });
});

router.get('/sign-in', function (req, res, next) {
  res.render('sign-in', {
    title: 'Sign In'
  });
});

router.get('/sitemap', function (req, res, next) {
  res.render('sitemap', { title: 'Sitemap' });
});

router.get('/error', function (req, res, next) {
  res.render('error', {
    title: 'Error'
  });
});

module.exports = router;