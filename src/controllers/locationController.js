const locationModel = require("../models/locationModel");

const handleServerError = (res, error, errorMessage) => {
  console.error(errorMessage, error);
  return res.status(500).json({ message: "Internal server error" });
};

const getCities = async (req, res) => {
  try {
    const cities = await locationModel.getAllCities();
    return res.status(200).json(cities);
  } catch (error) {
    return handleServerError(res, error, "Error retrieving cities:");
  }
};

const getStates = async (req, res) => {
  try {
    const states = await locationModel.getAllStates();
    return res.status(200).json(states);
  } catch (error) {
    return handleServerError(res, error, "Error retrieving states:");
  }
};

const getCityNameById = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await locationModel.getCityNameById(id);
    return res.status(200).json(city);
  } catch (error) {
    return handleServerError(res, error, "Error retrieving city by ID:");
  }
};

const getStateNameById = async (req, res) => {
  try {
    const { id } = req.params;
    const state = await locationModel.getStateNameById(id);
    return res.status(200).json(state);
  } catch (error) {
    return handleServerError(res, error, "Error retrieving state by ID:");
  }
};

const getCitiesByStateId = async (req, res) => {
  try {
    const { id } = req.params;
    const cities = await locationModel.getCitiesByStateId(id);
    return res.status(200).json(cities);
  } catch (error) {
    return handleServerError(res, error, "Error retrieving cities by state ID:");
  }
};

module.exports = {
  getCities,
  getStates,
  getCityNameById,
  getStateNameById,
  getCitiesByStateId,
};
