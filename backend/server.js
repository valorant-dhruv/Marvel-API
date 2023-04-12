//Inside the server.js file we will connect the backend with the database

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { Pool } = require("pg");
const cors = require("cors");

//These are all the routes for the CRUD operations
const showrouter = require("./views/showallcharacters");
const showrouter2 = require("./views/showonecharacter");
const createrouter = require("./views/createcharacter");
const deleterouter = require("./views/deletecharacter");
const updaterouter = require("./views/updatecharacter");

const server = new express();

const PORT = process.env.PORT || 5000;

server.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

server.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);

server.get("/", async (req, res) => {
  res.send("Hello world");
});

server.use(cors());

server.use("/showcharacters", showrouter);
server.use("/showonecharacter/", showrouter2);
server.use("/createcharacter", createrouter);
server.use("/deletecharacter", deleterouter);
server.use("/updatecharacter", updaterouter);

server.listen(PORT, async () => {
  await console.log(`The server is listening on port: ${PORT}`);
});
