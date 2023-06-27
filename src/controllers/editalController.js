const editalModel = require('../models/editalModel');

const insertEdital = async (req, res) => {
    try {
        const { studentemail, editalname, officename, orgname } = req.body;
        const edital = await editalModel.insertEdital(studentemail, editalname, officename, orgname);
        return res.status(200).json(edital);
    } catch (error) {
        console.error('Erro ao inserir edital:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { insertEdital };