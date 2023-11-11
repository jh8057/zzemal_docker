const express = require("express");
const app = express();
const port = 3001;

//cors 설정
const cors = require("cors");

const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001, http://localhost:3002",
  ,
  "http://localhost:5173",
];

const corsOptions = {
  origin: whitelist,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

const router = require("./router");
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Node SERVER - listen ${port} port`);
});
