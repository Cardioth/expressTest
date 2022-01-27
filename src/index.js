const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Why does this work but mine doesn't");
});

app.listen(8080);
