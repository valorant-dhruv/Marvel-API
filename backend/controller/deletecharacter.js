const pool = require("../queries");
const deletecharacter = async (req, res) => {
  //In this controller based on the name that is passed insid the body we are going to delete the name
  let name = req.body.name;
  let arr = await name.split(" ");
  let result = [];
  await arr.forEach((element) => {
    result.push(element.charAt(0).toUpperCase() + element.slice(1));
  });

  let finalstring = result.join(" ");
  await pool.query(
    "Delete from characters where name= $1",
    [finalstring],
    (err, results) => {
      if (err) {
        throw new Error(
          "There is some error while performing the delete query inside the database"
        );
      }

      if (results.rowCount == 0) {
        res.status(404).json({
          error: "The character is not present in the database",
        });
      } else {
        res.status(200).json({
          message: "The character has been deleted successfully",
        });
      }
    }
  );
};

module.exports = deletecharacter;
