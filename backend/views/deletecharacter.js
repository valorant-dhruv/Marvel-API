const express = require("express");
const deletecharacter = require("../controller/deletecharacter");

const deleterouter = express.Router();

deleterouter.use(express.json());

deleterouter.delete("/", deletecharacter);

module.exports = deleterouter;
