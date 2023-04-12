const express = require("express");
const showonecharacter = require("../controller/showonecharacter");

const showrouter2 = express.Router();

showrouter2.get("/:id", showonecharacter);

module.exports = showrouter2;
