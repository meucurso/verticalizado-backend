const connection = require("./connection");

const insertEdital = async (studentemail, editalname, officename, orgname) => {
  try {
    const [edital] = await connection.execute(
      "INSERT INTO editalorder (studentemail, editalname, officename, orgname) VALUES ( ?, ?, ?, ?)",
      [studentemail, editalname, officename, orgname]
    );
    return edital;
  } catch (error) {
    console.error("Erro ao inserir edital:", error);
    throw error;
  }
};

const favoriteEdital = async (userId, editalId) => {
  try {
    const [edital] = await connection.execute(
      "INSERT INTO favoriteEditals (userId, editalId) VALUES (?, ?)",
      [userId, editalId]
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
      "SELECT * FROM favoriteEditals WHERE userId = ?",
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
      "DELETE FROM favoriteEditals WHERE userId = ? AND editalId = ?",
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
  removeFavoriteEdital,
};
