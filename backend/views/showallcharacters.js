//Inside this we are going to display the details of all the characters of the marvel API
const express = require("express");
const showallcharacters = require("../controller/showallcharacters");

const showrouter = express.Router();
const pool = require("../queries");

showrouter.get("/",showallcharacters);

module.exports = showrouter;
