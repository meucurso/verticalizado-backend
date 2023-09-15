const connection = require("./connection");
const getAllMethods = async () => {
  try {
    const [methods] = await connection.execute("SELECT * FROM methods");
    return methods;
  } catch (error) {
    console.error("Erro ao inserir edital:", error);
    throw error;
  }
};
const insertStudentMethods = async (studentId, editalId, areaId, methods) => {
  try {
    await connection.execute(
      "INSERT INTO student_methods (studentid, editalid, areaid, methodId) VALUES (?, ?, ?, ?)",
      [studentId, editalId, areaId, methods]
    );
    return true;
  } catch (error) {
    console.error("Erro ao inserir edital:", error);
    throw error;
  }
};

const deleteStudentMethods = async (studentId, editalId, areaId, methodId) => {
  try {
    const [methods] = await connection.execute(
      "DELETE FROM student_methods WHERE studentid = ? AND editalid = ? AND areaid = ? AND methodId = ?",
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
      "SELECT * FROM student_methods WHERE studentid = ? AND editalid = ? AND areaid = ?",
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
      "SELECT * FROM student_methods WHERE studentid = ? AND editalid = ?",
      [studentId, editalId]
    );
    return methods;
  } catch (error) {}
};
const percentEditalModel = async (studentId, editalId) => {
  try {
    const [methods] = await connection.execute(
      "SELECT * FROM student_methods WHERE studentid = ? AND editalid = ?",
      [studentId, editalId]
    );
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
