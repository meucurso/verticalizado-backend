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


module.exports = { insertEdital };