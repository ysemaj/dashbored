const express = require("express");

const router = express.Router();

/* GET legal */

router.get("/", (req, res, next) => {
  res.render("legal/index", { title: "Legal" });
});

router.get("/privacy", (req, res, next) => {
  res.render("legal/privacy", { title: "Privacy Policy" });
});

router.get("/investors", (req, res, next) => {
  res.render("legal/investors", { title: "Investors" });
});

router.get("/payments", (req, res, next) => {
  res.render("legal/payments", { title: "Payments" });
});

router.get("/terms", (req, res, next) => {
  res.render("legal/terms", { title: "Terms & Conditions" });
});

router.get("/user-agreement", (req, res, next) => {
  res.render("legal/user-agreement", { title: "User Agreement" });
});

router.get("/libraries", (req, res, next) => {
  res.render("legal/libraries", { title: "Open Source Libraries" });
});

router.get("/cookies", (req, res, next) => {
  res.render("legal/cookies", { title: "Cookies" });
});

router.get("/security", (req, res, next) => {
  res.render("legal/security", {
    title: "Security",
  });
});

module.exports = router;
