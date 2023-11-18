const express = require("express");
const router = express.Router();
const multer = require("multer");
const menuList = require("./menuList");
const menuListJS = require("./menuList.js");
const fs = require("fs");

//multer 설정
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

router.get("/", (req, res) => {
  console.log("menuList", menuList);
  res.json(menuList);
});

router.post("/upload", upload.single("image"), (req, res) => {
  const { title, content, imgSrc } = req.body;
  const data = {
    title,
    content,
    imgSrc,
  };
  console.log("menuListJS", menuListJS);
  menuListJS.push(data);
  console.log("newMenu", menuListJS);

  const jsonStr = JSON.stringify({ menuList: menuListJS });
  console.log("jsonStr", jsonStr);

  fs.writeFile("./router/menu/menuList.json", jsonStr, (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
    } else {
      console.log("JSON file written successfully.");
    }
  });

  res.json(true);
});

module.exports = router;
