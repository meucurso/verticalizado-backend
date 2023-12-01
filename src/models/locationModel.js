const connection = require("./connection");
const SQL_QUERY = {
  getAllCitysQuery: "SELECT * FROM city",
  getAllStatesQuery: "SELECT * FROM state",
  getCityNameByIdQuery: "SELECT * FROM city WHERE id = ?",
  getStateNameByIdQuery: "SELECT * FROM state WHERE id = ?",
  getCityByStateIdQuery: "SELECT * FROM city WHERE state_id = ?",
};
const getAllCitys = async () => {
  const [locations] = await connection.execute(SQL_QUERY.getAllCitysQuery);
  return locations;
};
const getAllStates = async () => {
  const [locations] = await connection.execute(SQL_QUERY.getAllStatesQuery);
  return locations;
};
const getCityNameById = async (id) => {
  const [locations] = await connection.execute(SQL_QUERY.getCityNameByIdQuery, [
    id,
  ]);
  return locations;
};
const getStateNameById = async (id) => {
  const [locations] = await connection.execute(
    SQL_QUERY.getStateNameByIdQuery,
    [id]
  );
  return locations;
};
const getCityByStateId = async (id) => {
  const [locations] = await connection.execute(
    SQL_QUERY.getCityByStateIdQuery,
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
