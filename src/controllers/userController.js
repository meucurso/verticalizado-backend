const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const create = async (req, res) => {
  const {
    state_id,
    city_id,
    name,
    email,
    cpf,
    sex,
    password,
  } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const active = 1;
  const updated_at = new Date();
  const created_at = new Date();
  const user = await userModel.createUser({
    state_id,
    city_id,
    name,
    email,
    cpf,
    sex,
    active: active,
    updated_at: updated_at,
    created_at: created_at,
    password: hashedPassword,
  });

return res.status(200).json(user);
};
const getUserInfo = async (req, res) => {
  const { email } = req.body;
  const user = await userModel.getUserInfo(email);
  return res.status(200).json(user);
};

const deleteUserController = async (req, res) => {
  const { email } = req.body;
  const user = await userModel.deleteUser(email);
  return res.status(200).json(user);
};
const editUserController = async (req, res) => {
  const { email, name, state_id, city_id } = req.body;
  const user = await userModel.editUserInfo(email, name, state_id, city_id);
  return res.status(200).json(user);
};


module.exports = {
  getUserInfo,
  editUserController,
  deleteUserController,
  create,
};