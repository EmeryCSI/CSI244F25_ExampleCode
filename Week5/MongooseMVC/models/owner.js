//import mongoose
const mongoose = require("mongoose");

//Define an schema (owner)
//an owner can have multiple properties but each property has ONE owner
const ownerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true, //nullable or NOT nullable
  },
  email: {
    type: String,
    require: true,
    unique: true, //It wont let me create two owners with the same email
  },
  phone: {
    type: String,
    require: true,
    unique: true,
  },
});

const model = mongoose.model("Owner", ownerSchema);
module.eports = model;
