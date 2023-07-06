const locationModel = require('../models/locationModel');

const getCitys = async (req, res) => {
    try {
        const citys = await locationModel.getAllCitys();
        return res.status(200).json(citys);
    } catch (error) {
        console.error('Erro ao pegar as cidades:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getStates = async (req, res) => {
    try {
        const states = await locationModel.getAllStates();
        return res.status(200).json(states);
    } catch (error) {
        console.error('Erro ao pegar os estados:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
const getCityNameById = async (req, res) => {
    try {
        const { id } = req.params;
        const city = await locationModel.getCityNameById(id);
        return res.status(200).json(city);
    } catch (error) {
        console.error('Erro ao pegar as cidades:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getStateNameById = async (req, res) => {
    try {
        const { id } = req.params;
        const state = await locationModel.getStateNameById(id);
        return res.status(200).json(state);
    } catch (error) {
        console.error('Erro ao pegar os estados:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
const getCityByStateId = async (req, res) => {
    try {
        const { id } = req.params;
        const city = await locationModel.getCityByStateId(id);
        return res.status(200).json(city);
    } catch (error) {
        console.error('Erro ao pegar as cidades:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
  


module.exports = { getCitys, getStates, getCityNameById, getStateNameById , getCityByStateId};