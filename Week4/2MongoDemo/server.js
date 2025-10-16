// I need express, dotenv, mongoose
//dotenv is a library that lets us create ENVIRONMENT VARIABLES
//Variable that is available to the whole project
require("dotenv").config();
console.log(process.env.CONNECTION_STRING);
const mongoose = require("mongoose");
const express = require("express");
