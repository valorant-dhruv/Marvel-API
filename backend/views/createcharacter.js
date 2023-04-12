const express = require("express");
const createcharacter = require("../controller/createcharater");
const pool = require("../queries");

const createrouter = express.Router();
createrouter.use(express.json());

createrouter.post("/", createcharacter);

module.exports = createrouter;
