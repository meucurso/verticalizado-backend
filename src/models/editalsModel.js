const connection = require("./connection");

const getAllInfo = async () => {
  connection.query("SELECT * FROM editals", (err, rows) => {
    if (err) throw err;
    console.log("Data received from Db:");
    console.log(rows);
  });

  console.log("getAllInfoAboutEditals");
};
const editEditals = async () => {
  console.log("editEditals");
};
const deleteEditals = async () => {
  console.log("deleteEditals");
};
const createEditals = async () => {
  console.log("createEditals");
};

module.exports = {
  getAllInfo,
  editEditals,
  deleteEditals,
  createEditals,
};
