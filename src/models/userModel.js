const connection = require("./connection");

const getAllUsers = async () => {
  const [users] = await connection.execute("SELECT * FROM student");
  return users;
};
const getUserInfoById = async (id) => {
  const [user] = await connection.execute(
    "SELECT * FROM student WHERE id = ?",
    [id]
  );
  return user;
};
const editUser = async (id) => {
  const [user] = await connection.execute("UPDATE student SET WHERE id = ?", [
    id,
  ]);
  return user;
};

const createUser = async (
  name,
  email,
  password,
  cpf,
  sex,
  bornDate,
  stateId,
  cityId,
  dateInserted,
  active
) => {
  const [user] = await connection.execute(
    "INSERT INTO student (name, email, password, cpf, sex, bornDate, stateId, cityId, dateInserted, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      name,
      email,
      password,
      cpf,
      sex,
      bornDate,
      stateId,
      cityId,
      dateInserted,
      active,
    ]
  );
  return user;
};
const deleteUser = async (id) => {
  const [user] = await connection.execute("DELETE FROM student WHERE id = ?", [
    id,
  ]);
  return user;
};

module.exports = {
  getUserInfoById,
  editUser,
  getAllUsers,
  createUser,
  deleteUser,
};
