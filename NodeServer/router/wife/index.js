const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("wife is so lovely");
});

module.exports = router;
