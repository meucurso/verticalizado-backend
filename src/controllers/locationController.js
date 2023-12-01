const locationModel = require("../models/locationModel");

const getCities = async (req, res) => {
  try {
    const cities = await locationModel.getAllCities();
    return res.status(200).json(cities);
  } catch (error) {
    console.error("Erro ao obter as cidades:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

const getStates = async (req, res) => {
  try {
    const states = await locationModel.getAllStates();
    return res.status(200).json(states);
  } catch (error) {
    console.error("Erro ao obter os estados:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

const getCityNameById = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await locationModel.getCityNameById(id);
    return res.status(200).json(city);
  } catch (error) {
    console.error("Erro ao obter a cidade por ID:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

const getStateNameById = async (req, res) => {
  try {
    const { id } = req.params;
    const state = await locationModel.getStateNameById(id);
    return res.status(200).json(state);
  } catch (error) {
    console.error("Erro ao obter o estado por ID:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

const getCitiesByStateId = async (req, res) => {
  try {
    const { id } = req.params;
    const cities = await locationModel.getCitiesByStateId(id);
    return res.status(200).json(cities);
  } catch (error) {
    console.error("Erro ao obter as cidades por ID do estado:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = {
  getCities,
  getStates,
  getCityNameById,
  getStateNameById,
  getCitiesByStateId,
};
