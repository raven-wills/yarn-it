const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3001;
const UserModel = require("./Schema/User");

require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/createuser/", (req, res) => {
  const { sub, picture, name } = req.body.data;
  UserModel.findOneAndUpdate(
    { sub: sub },
    { name: name, picture: picture },
    { upsert: true, new: true }
  ).then(user => {
    return user;
  });
});

app.get("/api/getuser/:sub", async (req, res) => {
  const { sub } = req.params;
  const user = await UserModel.findOne({ sub: sub });
  const patternQuery = user.savedPatterns.join("+");
  const patternRequest = await axios.get(
    `https://api.ravelry.com/patterns.json?ids=${patternQuery}`,
    {
      auth: {
        username: process.env.RAV_USERNAME,
        password: process.env.RAV_PASSWORD
      }
    }
  );
  res.json({ user, savedPatterns: patternRequest.data.patterns });
});

app.post("/api/savepattern/:sub/:pattern", (req, res) => {
  const { sub, pattern } = req.params;
  UserModel.findOne({ sub: sub }).then(user => {
    user.savedPatterns.push(pattern);
    user.save().then(savedUser => res.json(savedUser));
  });
});

app.post("/api/unsavepattern/:sub/:pattern", (req, res) => {
  const { sub, pattern } = req.params;
  UserModel.findOne({ sub: sub }).then(user => {
    // user.savedPatterns.push(pattern);
    // delete the pattern
    user.save().then(savedUser => res.json(savedUser));
  });
});

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
