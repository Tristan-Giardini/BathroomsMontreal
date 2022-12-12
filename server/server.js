const express = require("express");
const app = express();

app.get("/message", function (req, res) {
  res.status(200).json({ message: "hello world" });
});

app.listen(8000);
