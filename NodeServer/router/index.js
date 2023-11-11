const express = require("express");
const router = express.Router();

const menu = require("./menu");
router.use("/menu", menu);

const wife = require("./wife");
router.use("/wife", wife);

module.exports = router;
