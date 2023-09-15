const methodModel = require("../models/methodsModel");
const getAllMethods = async (req, res) => {
  try {
    const methods = await methodModel.getAllMethods();
    return res.status(200).json(methods);
  } catch (error) {
    console.error("Erro ao pegar os metodos:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const getAllStudentMethods = async (req, res) => {
  try {
    const { studentId, editalId, areaId } = req.query;
    const methods = await methodModel.getStudentMethodsEditalAndArea(
      studentId,
      editalId,
      areaId
    );
    return res.status(200).json(methods);
  } catch (error) {
    console.error("Erro ao pegar os metodos:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const insertStudentMethods = async (req, res) => {
  try {
    const { studentId, editalId, areaId, methods } = req.body;
    const method = await methodModel.insertStudentMethods(
      studentId,
      editalId,
      areaId,
      methods
    );
    return res.status(200).json(method);
  } catch (error) {
    console.error("Erro ao pegar os metodos:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const deleteStudentMethods = async (req, res) => {
  try {
    const { studentId, editalId, areaId, methods } = req.body;
    const method = await methodModel.deleteStudentMethods(
      studentId,
      editalId,
      areaId,
      methods
    );
    return res.status(200).json(method);
  } catch (error) {
    console.error("Erro ao pegar os metodos:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const getByEdital = async (req, res) => {
  try {
    const { studentId, editalId } = req.body;
    const method = await methodModel.getByEditalIdAndUser(studentId, editalId);
    return res.status(200).json(method);
  } catch (error) {
    console.error("Erro ao pegar os metodos:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const percentEdital = async (req, res) => {
  try {
    const { studentId, editalId } = req.body;
    const method = await methodModel.percentEditalModel(studentId, editalId);
    return res.status(200).json(method);
  } catch (error) {
    console.error("Erro ao pegar os metodos:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  percentEdital,
  getAllMethods,
  getAllStudentMethods,
  getByEdital,
  insertStudentMethods,
  deleteStudentMethods,
};
