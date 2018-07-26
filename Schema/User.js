const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  sub: String,
  name: String,
  picture: String,
  savedPatterns: [String],
  updated: { type: Date, default: Date.now() }
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
