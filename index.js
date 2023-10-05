require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("google.com");
});
app.get("/login", (req, res) => {
  res.send("<h1>Hello hitesh sir  you are best teacher of my life</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>Himanshu ka code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
