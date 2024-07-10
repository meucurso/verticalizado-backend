const connection = require("./connection");
const SQL_QUERY = {
  insertEditalQuery:
    "INSERT INTO editalorder (studentemail, editalname, officename, orgname) VALUES ( ?, ?, ?, ?)",
  favoriteEditalQuery:
    "INSERT INTO favoriteEditals (userId, editalId) VALUES (?, ?)",
  getFavoriteEditalsQuery: "SELECT * FROM favoriteEditals WHERE userId = ?",
   getFavoriteEditalsAllQuery: "SELECT * FROM favoriteEditals",
  removeFavoriteEditalQuery:
    "DELETE FROM favoriteEditals WHERE userId = ? AND editalId = ?",
};
const insertEdital = async (studentemail, editalname, officename, orgname) => {
  try {
    const [edital] = await connection.execute(SQL_QUERY.insertEditalQuery, [
      studentemail,
      editalname,
      officename,
      orgname,
    ]);
    return edital;
  } catch (error) {
    console.error("Erro ao inserir edital:", error);
    throw error;
  }
};

const favoriteEdital = async (userId, editalId) => {
  try {
    const [edital] = await connection.execute(SQL_QUERY.favoriteEditalQuery, [
      userId,
      editalId,
    ]);
    return edital;
  } catch (error) {
    console.error("Erro ao inserir edital:", error);
    throw error;
  }
};
const getFavoriteEditals = async (userId) => {
  try {
    const [edital] = await connection.execute(
      SQL_QUERY.getFavoriteEditalsQuery,
      [userId]
    );
    return edital;
  } catch (error) {
    console.error("Erro ao inserir edital:", error);
    throw error;
  }
};
const getFavoriteEditals = async (userId) => {
  try {
    const [edital] = await connection.execute(
      SQL_QUERY.getFavoriteEditalsQuery,
      [userId]
    );
    return edital;
  } catch (error) {
    console.error("Erro ao inserir edital:", error);
    throw error;
  }
};
const removeFavoriteEdital = async (userId, editalId) => {
  try {
    const [edital] = await connection.execute(
      SQL_QUERY.removeFavoriteEditalQuery,
      [userId, editalId]
    );
    return edital;
  } catch (error) {
    console.error("Erro ao inserir edital:", error);
    throw error;
  }
};

module.exports = {
  insertEdital,
  favoriteEdital,
  getFavoriteEditals,
   getFavoriteEditalsAll,
  removeFavoriteEdital,
};
