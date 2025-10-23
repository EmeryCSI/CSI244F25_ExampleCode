//import express
const express = require("express");
const {
  getAllOwners,
  getOwnerById,
  createOwner,
  updateOwner,
} = require("../controllers/ownerController");

//make a router object
const router = express.Router();

//define our routes
//Get api/owners
router.get("/", getAllOwners);
//get api/owners/:id
router.get("/:id", getOwnerById);
//post api/owners
//create an owner - data comes in through the req body
router.post("/", createOwner);
//put and delete
router.put("/:id", updateOwner);

module.exports = router;
