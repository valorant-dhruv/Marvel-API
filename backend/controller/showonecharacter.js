const pool = require("../queries");

const showonecharacter = async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(typeof id);
  console.log("This is the id:", id);
  pool.query(`select * from characters where id=${id}`, (err, results) => {
    if (err) {
      throw new Error(
        "There is some error while querying the data for single character"
      );
    }

    console.table(results.rows);
    res.status(200).json(results.rows);
  });
};

module.exports = showonecharacter;
