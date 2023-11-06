const express = require("express");
const router = express.Router();

const basic = require("./basic");
router.use("/basic", basic);

const wife = require("./wife");
router.use("/wife", wife);

module.exports = router;
