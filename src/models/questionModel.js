const connection = require("./connection");

const getQuestions = async () => {
  return response.status(200).json({ message: "getQuestions" });
};

const createQuestions = async () => {
return response.status(200).json({ message: "createQuestions" });
};
const deleteQuestion = async () => {
 return response.status(200).json({ message: "deleteQuestion" });
};
const editQuestion = async () => {
  return response.status(200).json({ message: "editQuestion" })
};

module.exports = {
    getQuestions,
    createQuestions,
    deleteQuestion,
    editQuestion,


};
