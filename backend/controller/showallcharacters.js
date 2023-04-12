const pool = require("../queries");

const showallcharacters = async (req, res) => {
  await pool.query("Select * from characters", (err, results) => {
    if (err) {
      throw new Error("There is some error while querying the complete data");
      console.log(err);
    } else {
      console.table(results.rows);
      res.status(200).json(results.rows);
    }
  });
};

module.exports = showallcharacters;
