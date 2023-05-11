const connection = require("./connection");

const getAllInfo = async () => {
return response.status(200).json({ message: "getAllInfoAboutEditals" 
  });

  
};
const editEditals = async () => {
  return response.status(200).json({ message: "editEditals" });
};
const deleteEditals = async () => {
return response.status(200).json({ message: "deleteEditals" });
};
const createEditals = async () => {
  return response.status(200).json({ message: "createEditals" });
};

module.exports = {
  getAllInfo,
  editEditals,
  deleteEditals,
  createEditals,
};
