const connection = require("./connection");

const getQuestions = async () => {
  console.log("getQuestions");
};

const createQuestions = async () => {
  console.log("createQuestion");
};
const deleteQuestion = async () => {
  console.log("deleted");
};
const editQuestion = async () => {
    console.log("editQuestion");
};

module.exports = {
    getQuestions,
    createQuestions,
    deleteQuestion,
    editQuestion,

    
};
