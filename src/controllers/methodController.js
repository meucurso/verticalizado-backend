const methodModel = require("../models/methodsModel");

const handleServerError = (res, error, errorMessage) => {
  console.error(errorMessage, error);
  return res.status(500).json({ message: "Internal server error" });
};

const getAllMethods = async (req, res) => {
  try {
    const methods = await methodModel.getAllMethods();
    return res.status(200).json(methods);
  } catch (error) {
    return handleServerError(res, error, "Error retrieving all methods:");
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
    return handleServerError(res, error, "Error retrieving student methods:");
  }
};

const insertStudentMethods = async (req, res) => {
  try {
    const { studentId, editalId, areaId, methods } = req.body;
    // Validate input here if needed
    const method = await methodModel.insertStudentMethods(
      studentId,
      editalId,
      areaId,
      methods
    );
    return res.status(200).json(method);
  } catch (error) {
    return handleServerError(res, error, "Error inserting student methods:");
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
    return handleServerError(res, error, "Error deleting student methods:");
  }
};

const getByEdital = async (req, res) => {
  try {
    const { studentId, editalId } = req.body;
    // Validate input here if needed
    const method = await methodModel.getByEditalIdAndUser(studentId, editalId);
    return res.status(200).json(method);
  } catch (error) {
    return handleServerError(res, error, "Error retrieving methods by edital:");
  }
};

const percentEdital = async (req, res) => {
  try {
    const { studentId, editalId } = req.body;
    const method = await methodModel.percentEditalModel(studentId, editalId);
    return res.status(200).json(method);
  } catch (error) {
    return handleServerError(res, error, "Error calculating percent edital:");
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
