const userModel = require("../models/userModel");

const getAll = async (req, res) => {
  const users = await userModel.getAllUsers();
  return res.status(200).json(users);
};
const create = async (req, res) => {
  const user = await userModel.createUser();
  console.log(user);
};
const deleteUserController = async (req, res) => {
  const user = await userModel.deleteUser();
  return res.status(200).json(user);
};
const editUserController = async (req, res) => {
  const user = await userModel.editUser();
  return res.status(200).json(user);
};
const getUserInfoById = async (req, res) => {
  const user = await userModel.getUserInfoById();
  return res.status(200).json(user);
};

module.exports = {
  getUserInfoById,
  editUserController,
  getAll,
  deleteUserController,
  create,
};
