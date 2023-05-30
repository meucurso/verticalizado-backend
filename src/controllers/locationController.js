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

module.exports = { getCitys, getStates };