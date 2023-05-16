const editalModel = require("../models/editalsModel");

const getAll = async (req, res) => {
    const editals = await editalModel.getAllInfo();
    return res.status(200).json(editals);
};

module.exports = {
    getAll,
};