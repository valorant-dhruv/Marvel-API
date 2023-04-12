const pool = require("../queries");

const updatecharacter = async (req, res) => {
  let id = parseInt(req.params.id);
  let name = req.body.name;
  let arr = await name.split(" ");
  let result = [];
  await arr.forEach((element) => {
    result.push(element.charAt(0).toUpperCase() + element.slice(1));
  });

  let finalstring = result.join(" ");
  await pool.query(
    "Update characters set name= $1 where id = $2",
    [finalstring, id],
    (err, results) => {
      if (err) {
        console.log(err);
        throw new Error(
          "There is some error while performing update query on the data"
        );
      }

      if (results.rowCount == 0) {
        res.status(404).json({
          error: "The data is not present inside the database",
        });
      } else {
        res.status(200).json({
          body: "The character with the id has been updated successfully",
        });
      }
    }
  );
};

module.exports = updatecharacter;
