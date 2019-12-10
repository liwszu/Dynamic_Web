const express = require("express");
const router = express.Router("router");

router.get("/", (req, res) => res.send("About the API"));
router.get("/me", (req, res) => res.send("Thank you"));

module.exports = router;
