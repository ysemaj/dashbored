const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "dashbored",
  });
});

router.get("/about", (req, res, next) => {
  res.render("about", {
    title: "About",
  });
});

router.get("/awards", (req, res, next) => {
  res.render("awards", {
    title: "Awards",
  });
});

router.get("/contact", (req, res, next) => {
  res.render("contact", {
    title: "Contact",
  });
});

router.get("/customers", (req, res, next) => {
  res.render("customers", {
    title: "Customers",
  });
});

router.get("/faqs", (req, res, next) => {
  res.render("faqs", {
    title: "Frequently Asked Questions",
  });
});

router.get("/forgot-password", (req, res, next) => {
  res.render("forgot-password", {
    title: "Forgot Password",
  });
});

router.get("/news", (req, res, next) => {
  res.render("news", {
    title: "News",
  });
});

router.get("/pricing", (req, res, next) => {
  res.render("pricing", {
    title: "Pricing",
  });
});

router.get("/register", (req, res, next) => {
  res.render("register", {
    title: "Register",
  });
});

router.get("/sign-in", (req, res, next) => {
  res.render("sign-in", {
    title: "Sign In",
  });
});

router.get("/sitemap", (req, res, next) => {
  res.render("sitemap", { title: "Sitemap" });
});

router.get("/error", (req, res, next) => {
  res.render("error", {
    title: "Error",
  });
});

module.exports = router;
