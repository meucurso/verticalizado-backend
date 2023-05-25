const connection = require("./connection");
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

const getUserInfo = async (email) => {
  const [user] = await connection.execute("SELECT * FROM student WHERE email = ?", [
    email,
  ]);
  return user;
};

const editUserInfo = async (email, name, state_id, city_id) => {
  const [user] = await connection.execute("UPDATE student SET name = ?, state_id = ?, city_id = ? WHERE email = ?", [
    name,
    state_id,
    city_id,
    email,
  ]);
  return user;

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
createUser,
getUserInfo,
 editUserInfo,
  deleteUser,
};
