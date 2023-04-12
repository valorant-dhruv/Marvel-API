const { Pool } = require("pg");

//Now lets connect our backend application with the database

//We are connecting the backend with the postgresql database
//PostgreSQL is a powerful, open source object-relational database system
//There is this library called node postgres that allows us to connect to the database
//For it we first need to create a client object and this client object helps us in connecting to the database
//However when we create an instance of the client object we need to open and close the connection with the db while
//executing the queries

//Hence instead of the client object we are going to use the pool object to create a pool of connections
const pool = new Pool({
    user: "dhruv",
    host: "localhost",
    database: "marvel",
    password: "bittu",
    port: 5432,
  });


module.exports=pool;