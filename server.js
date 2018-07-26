const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3001;

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/categories/", (req, res) => {
  axios
    .get("https://api.ravelry.com/pattern_categories/list.json")
    .then(response => {
      res.json(response.data.pattern_categories.children);
    });
});

app.get("/api/subcategory/:permalink", (req, res) => {
  const query = `pc=${
    req.params.permalink
  }&page_size=10&availability=free&sort=rating`;
  axios
    .get(`https://api.ravelry.com/patterns/search.json?${query}`, {
      auth: {
        username: process.env.RAV_USERNAME,
        password: process.env.RAV_PASSWORD
      }
    })
    .then(response => res.json(response.data));
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
