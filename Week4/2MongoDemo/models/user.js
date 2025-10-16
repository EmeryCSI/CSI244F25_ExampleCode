//User model is responsible for taling to persistent storage (MongoDB)
const mongoose = require("mongoose");

//create a schema object which tells our APP what kind of data to expectc
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("User", userSchema);
