const connection = require("./connection");
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
const createUser = async ({
  state_id,
  city_id,
  name,
  email,
  cpf,
  sex,
  active,
  updated_at,
  created_at,
  password,
}) => {
  try {
    const [user] = await connection.execute("INSERT INTO Student ( state_id, city_id, name, email, cpf, sex, active, update_at, created_at, password) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
      state_id,
      city_id,
      name,
      email,
      cpf,
      sex,
      active,
      updated_at,
      created_at,
      password,
    ]);
    return user;
  } catch (error) {
    console.error('Erro ao criar o usuário:', error);
    throw error;
  }
};


const deleteUser = async (email) => {

  try{
    const [user] = await connection.execute("UPDATE student SET active = 0 WHERE email = ?", [
      email,
    ]);
    return user;
  } catch (error) {
    console.error('Erro ao deletar o usuário:', error);
    throw error;
  }
  
};
module.exports = {
  getUserInfoById,
  editUser,
  createUser,
  deleteUser,
};
