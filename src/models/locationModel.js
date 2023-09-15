const connection = require("./connection");

const getAllCitys = async () => {
  const [locations] = await connection.execute("SELECT * FROM city");
  return locations;
};
const getAllStates = async () => {
  const [locations] = await connection.execute("SELECT * FROM state");
  return locations;
};
const getCityNameById = async (id) => {
  const [locations] = await connection.execute(
    "SELECT * FROM city WHERE id = ?",
    [id]
  );
  return locations;
};
const getStateNameById = async (id) => {
  const [locations] = await connection.execute(
    "SELECT * FROM state WHERE id = ?",
    [id]
  );
  return locations;
};
const getCityByStateId = async (id) => {
  const [locations] = await connection.execute(
    "SELECT * FROM city WHERE state_id = ?",
    [id]
  );
  return locations;
};

module.exports = {
  getAllCitys,
  getAllStates,
  getCityNameById,
  getStateNameById,
  getCityByStateId,
};
