//bring in mongoose
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    require: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

//An owner can have multiple properties but each property only has ONE owner
const propertySchema = new mongoose.Schema({
  //Reference to the owner table (owner_ID - FK)
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner",
    //What does this mean if we want to create a new property?
    required: true,
  },
  address: {
    type: String,
    require: true,
  },
  bedrooms: Number,
  price: Number,
  dateAdded: Date,
  //we want each property to have many reviews
  //Let embed an array of reviews into property
});
