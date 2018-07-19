const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3001;

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/api/test", (req, res) => {
  res.json(true);
});

app.get("/api/categories/", (req, res) => {
  axios
    .get("https://api.ravelry.com/pattern_categories/list.json")
    .then(response => res.json(response.data));
});

app.post("/api/test", (req, res) => {
  console.log(req.body);
  req.body.received = true;
  res.json(req.body);
});

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, function() {
  console.log(`API Server now listening on port ${PORT}`);
});
