const connection = require('./connection')

const getAllInfo = async () => { 
    const users = await connection.execute('SELECT * FROM users');

}

module.exports = {
    getAll
}