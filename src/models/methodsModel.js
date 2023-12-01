const connection = require("./connection");
const SQL_QUERY = {
  getAllMethodsQuery: "SELECT * FROM methods",
  insertStudentMethodsQuery:
    "INSERT INTO student_methods (studentid, editalid, areaid, methodId) VALUES (?, ?, ?, ?)",
  deleteStudentMethodsQuery:
    "DELETE FROM student_methods WHERE studentid = ? AND editalid = ? AND areaid = ? AND methodId = ?",
  getStudentMethodsEditalAndAreaQuery:
    "SELECT * FROM student_methods WHERE studentid = ? AND editalid = ? AND areaid = ?",
  getByEditalIdAndUserQuery:
    "SELECT * FROM student_methods WHERE studentid = ? AND editalid = ?",
  percentEditalQuery:
    "SELECT * FROM student_methods WHERE studentid = ? AND editalid = ?",
};
const getAllMethods = async () => {
  try {
    const [methods] = await connection.execute(SQL_QUERY.getAllMethodsQuery);
    return methods;
  } catch (error) {
    console.error("Erro ao inserir edital:", error);
    throw error;
  }
};
const insertStudentMethods = async (studentId, editalId, areaId, methods) => {
  try {
    await connection.execute(SQL_QUERY.insertStudentMethodsQuery, [
      studentId,
      editalId,
      areaId,
      methods,
    ]);
    return true;
  } catch (error) {
    console.error("Erro ao inserir edital:", error);
    throw error;
  }
};

const deleteStudentMethods = async (studentId, editalId, areaId, methodId) => {
  try {
    const [methods] = await connection.execute(
      SQL_QUERY.deleteStudentMethodsQuery,
      [studentId, editalId, areaId, methodId]
    );
    return methods;
  } catch (error) {
    console.error("Erro ao inserir edital:", error);
    throw error;
  }
};

const getStudentMethodsEditalAndArea = async (studentId, editalId, areaId) => {
  try {
    const methods = await connection.execute(
      SQL_QUERY.getStudentMethodsEditalAndAreaQuery,
      [studentId, editalId, areaId]
    );
    return methods[0];
  } catch (error) {
    console.error("Erro ao inserir edital:", error);
    throw error;
  }
};

const getByEditalIdAndUser = async (studentId, editalId) => {
  try {
    const [methods] = await connection.execute(
      SQL_QUERY.getByEditalIdAndUserQuery,
      [studentId, editalId]
    );
    return methods;
  } catch (error) {}
};
const percentEditalModel = async (studentId, editalId) => {
  try {
    const [methods] = await connection.execute(SQL_QUERY.percentEditalQuery, [
      studentId,
      editalId,
    ]);
    return methods;
  } catch (error) {}
};

module.exports = {
  getAllMethods,
  percentEditalModel,
  getStudentMethodsEditalAndArea,
  insertStudentMethods,
  deleteStudentMethods,
  getByEditalIdAndUser,
};
