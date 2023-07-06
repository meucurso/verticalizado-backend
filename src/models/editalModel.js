const connection = require("./connection");

const insertEdital = async (
    studentemail,
    editalname,
    officename,
    orgname,
) => {
    try{
        const [edital] = await connection.execute("INSERT INTO editalorder (studentemail, editalname, officename, orgname) VALUES ( ?, ?, ?, ?)", [
            studentemail,
            editalname,
            officename,
            orgname,
        ]);
        return edital;


    }
    catch(error){
        console.error('Erro ao inserir edital:', error);
        throw error;
    }

}

const favoriteEdital = async (
    userId,
    editalId,
    secondEditalId,
    thirdEditalId,
) => {
    try{
        const [edital] = await connection.execute("INSERT INTO favoriteEditals (userId, editalId, secondEditalId, thirdEditalId) VALUES ( ?, ?, ?, ?)", [
            userId,
            editalId,
            secondEditalId,
            thirdEditalId,
        ]);
        return edital;
    }
    catch(error){
        console.error('Erro ao inserir edital:', error);
        throw error;
    }
}
const getFavoriteEditals = async (userId) => {
    try{
        const [edital] = await connection.execute("SELECT * FROM favoriteEditals WHERE userId = ?", [
            userId,
        ]);
        return edital;
    }
    catch(error){
        console.error('Erro ao inserir edital:', error);
        throw error;
    }
}
const removeFavoriteEdital = async (userId, editalId) => {
    try{
        const [edital] = await connection.execute(
            "SELECT IF(editalId = ?, editalId, IF(secondEditalId = ?, secondEditalId, IF(thirdEditalId = ?, thirdEditalId, NULL))) AS result FROM favoriteEditals WHERE userId = ?",
            [editalId, editalId, editalId, userId]
          );
          const [edital2] = await connection.execute(
            "SELECT * FROM favoriteEditals WHERE userId = ?",
            [userId]
          );
          
          console.log(edital2);

          if (edital.length > 0) {
            const editalResult = edital[0].result;
            if (editalResult === null) {
                return res.status(400).json({ message: "Doesnt exist " });
              }
            if (editalResult === edital2[0].editalId) {
              await connection.execute("UPDATE favoriteEditals SET editalId = NULL WHERE userId = ?", [userId]);
            } else if (editalResult === edital2[0].secondEditalId) {
              await connection.execute("UPDATE favoriteEditals SET secondEditalId = NULL WHERE userId = ?", [userId]);
            } else if (editalResult === edital2[0].thirdEditalId) {
              await connection.execute("UPDATE favoriteEditals SET thirdEditalId = NULL WHERE userId = ?", [userId]);
            }
          }
        return edital;


    }
    catch(error){
        console.error('Erro ao inserir edital:', error);
        throw error;
    }
}
const updateFavorites = async (userId, editalId, secondEditalId, thirdEditalId) => {
    try{
        const [edital] = await connection.execute("UPDATE favoriteEditals SET editalId = ?, secondEditalId = ?, thirdEditalId = ? WHERE userId = ?", [
            editalId,
            secondEditalId,
            thirdEditalId,
            userId,
        ]);

        return edital;
        
    }
    catch(error){
        console.error('Erro ao inserir edital:', error);
        throw error;
    }
}
const userExist = async (userId) => {
    try{
        const [edital] = await connection.execute("SELECT * FROM favoriteEditals WHERE userId = ?", [
            userId,
        ]);
        return edital;
    }
    catch(error){
        console.error('Erro ao inserir edital:', error);
        throw error;
    }
}


module.exports = { insertEdital, favoriteEdital, getFavoriteEditals , removeFavoriteEdital, updateFavorites, userExist};