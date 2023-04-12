const pool = require("../queries");

const createcharacter = async (req, res) => {
  //Before inserting a new character we need to first make sure whether that character exists or not
  let character = await req.body.name;
  let arr = await character.split(" ");
  let result = [];
  await arr.forEach((element) => {
    result.push(element.charAt(0).toUpperCase() + element.slice(1));
  });

  let finalstring = result.join(" ");

  function firstquery(secondquery) {
    //Now that we have the final string the next step is to check whether the string already exists in the database or not
    pool.query(
      `select * from characters where name=$1`,
      [finalstring],
      (err, results) => {
        if (err) {
          throw new Error(
            "Some error occured while comparing data in create character"
          );
        }

        //   console.table(results.rows);
        // console.log(results.rows);
        if (results.rows.length != 0) {
          res.status(404).json({
            error: "The name already exists in the database",
          });
        } else {
          secondquery();
        }
      }
    );
  }

  async function secondquery() {
    console.log("This is the final string", finalstring);
    //This means that the name doesn't exist in the database and we can add the character
    await pool.query(
      "Insert into characters (name) values ($1)",
      [finalstring],
      (err, results) => {
        if (err) {
          console.log(err);
        }

        console.log(results);
      }
    );
    await res.status(200).json({
      body: "OK",
    });
  }

  firstquery(secondquery);
};

module.exports = createcharacter;
