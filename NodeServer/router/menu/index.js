const express = require("express");
const router = express.Router();

const menuList = require("./menuList.json");

router.get("/", (req, res) => {
  console.log("menuList", menuList);
  res.json(menuList);
});

module.exports = router;
