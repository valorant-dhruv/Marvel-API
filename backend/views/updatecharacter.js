const express = require("express");
const updaterouter = express.Router();
const updatecharacter = require("../controller/updatecharacter");
updaterouter.use(express.json());

//Here we are updating the marvel character by its id
updaterouter.patch("/:id", updatecharacter);

module.exports = updaterouter;
