const connection = require("./connection");

const getUserInfo = async () => {
  return response.status(200).json({ message: "getUserInfo" });
};
const getUserInfoById = async (id) => {
  console.log(id);
  return response.status(200).json({ message: "getUserInfoById" });
};
const createUser = async () => {
return response.status(200).json({ message: "createUser" });
};
const deleteUser = async () => {
 return response.status(200).json({ message: "deleteUser" });
};

module.exports = {
  getUserInfoById,
  getUserInfo,
  createUser,
  deleteUser,
};
