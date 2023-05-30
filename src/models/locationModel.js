const connection = require("./connection");

const getAllCitys = async () => {
    const [locations] = await connection.execute(
        "SELECT * FROM city"
    );
    return locations;
    }
const getAllStates = async () => {
    const [locations] = await connection.execute(
        "SELECT * FROM state"
    );
    return locations;
    }

module.exports = { getAllCitys, getAllStates };