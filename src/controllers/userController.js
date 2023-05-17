const userModel = require("../models/userModel");

const getAll = async (req, res) => {
  const users = await userModel.getAllUsers();
  console.log(users);
};
const create = async (req, res) => {
  const user = await userModel.createUser();
  console.log(user);
};
            
module.exports = {
  getAll,
  create,
};
