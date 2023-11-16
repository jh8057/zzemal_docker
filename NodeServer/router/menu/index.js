const express = require("express");
const router = express.Router();
const multer = require("multer");
const menuList = require("./menuList.json");
//multer 설정
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      console.log("file", file, req);
      cb(null, file.originalname);
    },
  }),
});

router.get("/", (req, res) => {
  console.log("menuList", menuList);
  res.json(menuList);
});

router.post("/upload", upload.single("image"), (req, res) => {
  res.json(true);
});

module.exports = router;
