const connection = require("./connection");

const getAllInfo = async () => {
  const [editals] = await connection.execute("SELECT * FROM editals");
  return editals;
};
const editEditals = async () => {
  const [editals] = await connection.execute("SELECT * FROM student");
  return editals;
  
};
const desactiveEditals = async () => {
  return response.status(200).json({ message: "deleteEditals" });
};
const createEditals = async () => {
  return response.status(200).json({ message: "createEditals" });
};

module.exports = {
  getAllInfo,
  editEditals,
  deleteEditals,
  createEditals,
};
