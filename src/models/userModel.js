const connection = require("./connection");

const SQL_QUERY = {
  createUserQuery:
    "INSERT INTO student ( state_id, city_id, name, email, sex, active, update_at, created_at, password, birth_date) VALUES ( ?, ?, ?,  ?, ?, ?, ?, ?, ?, ?)",
  getUserInfoQuery: "SELECT * FROM student WHERE email = ?",
  editUserInfoQuery:
    "UPDATE student SET name = ?, state_id = ?, city_id = ? WHERE email = ?",
  deleteUserQuery: "UPDATE student SET active = 0 WHERE email = ?",
  authUserQuery: "SELECT * FROM student WHERE email = ? AND password = ?",
  updatePasswordQuery: "UPDATE student SET password = ? WHERE email = ?",
  recoverPasswordQuery: "SELECT * FROM student WHERE email = ?",
  getAllUsersQuery: "SELECT * FROM student",
};

const createUser = async ({
  state_id,
  city_id,
  name,
  email,
  sex,
  active,
  updated_at,
  created_at,
  password,
  birth_date,
}) => {
  try {
    const [user] = await connection.execute(SQL_QUERY.createUserQuery, [
      state_id,
      city_id,
      name,
      email,
      sex,
      active,
      updated_at,
      created_at,
      password,
      birth_date || null,
    ]);
    return user;
  } catch (error) {
    console.error("Erro ao criar o usuário:", error);
    throw error;
  }
};

const getUserInfo = async (email) => {
  try {
    const [user] = await connection.execute(SQL_QUERY.getUserInfoQuery, [
      email,
    ]);
    return user;
  } catch (error) {
    console.error("Erro ao pegar informacao do  usuário:", error);
    throw error;
  }
};

const editUserInfo = async (email, name, state_id, city_id) => {
  try {
    const [user] = await connection.execute(SQL_QUERY.editUserInfoQuery, [
      name,
      state_id,
      city_id,
      email,
    ]);
    return user;
  } catch (error) {
    console.error("Erro ao editar o usuário:", error);
    throw error;
  }
};

const deleteUser = async (email) => {
  try {
    const [user] = await connection.execute(SQL_QUERY.deleteUserQuery, [email]);
    return user;
  } catch (error) {
    console.error("Erro ao deletar o usuário:", error);
    throw error;
  }
};

const authUser = async (email, password) => {
  try {
    const [user] = await connection.execute(SQL_QUERY.authUserQuery, [
      email || null,
      password || null,
    ]);
    return user;
  } catch (error) {
    console.error("Erro ao autenticar o usuário:", error);
    throw error;
  }
};
const updatePassword = async (email, password) => {
  try {
    const [user] = await connection.execute(SQL_QUERY.updatePasswordQuery, [
      password,
      email,
    ]);
    return user;
  } catch (error) {
    console.error("Erro ao atualizar a senha do usuário:", error);
    throw error;
  }
};

const recoverPassword = async (email) => {
  try {
    const [user] = await connection.execute(SQL_QUERY.recoverPasswordQuery, [
      email,
    ]);
    return user;
  } catch (error) {
    console.error("Erro ao recuperar a senha do usuário:", error);
    throw error;
  }
};
const getAllUsers = async () => {
  try {
    const [user] = await connection.execute(SQL_QUERY.getAllUsersQuery);
    return user;
  } catch (error) {
    console.error("Erro ao recuperar a senha do usuário:", error);
    throw error;
  }
};

module.exports = {
  getAllUsers,
  recoverPassword,
  authUser,
  createUser,
  getUserInfo,
  editUserInfo,
  deleteUser,
  updatePassword,
};
