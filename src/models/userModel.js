const connection = require("./connection");

const getUserInfo = async () => {
  console.log("get user info");
};
const getUserInfoById = async (id) => {

  console.log(id);
};
const createUser = async () => {
  console.log("createUser");
};
const deleteUser = async () => {
  console.log("deleted");
};

module.exports = {
  getUserInfo,
  createUser,
  deleteUser,
};
