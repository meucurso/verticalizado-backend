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
  birth_date,
}) => {
  try {
    const [user] = await connection.execute("INSERT INTO Student ( state_id, city_id, name, email, cpf, sex, active, update_at, created_at, password, birth_date) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
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
      birth_date,
    ]);
    return user;
  } catch (error) {
    console.error('Erro ao criar o usuário:', error);
    throw error;
  }
};

const getUserInfo = async (email) => {
 try{
  const [user] = await connection.execute("SELECT * FROM student WHERE email = ?", [
    email,
  ]);
  return user;
 } catch (error) {
    console.error('Erro ao pegar informacao do  usuário:', error);
    throw error;
  }
};

const editUserInfo = async (email, name, state_id, city_id) => {
try{
  const [user] = await connection.execute("UPDATE student SET name = ?, state_id = ?, city_id = ? WHERE email = ?", [
    name,
    state_id,
    city_id,
    email,
  ]);
  return user;
} catch (error) {
    console.error('Erro ao editar o usuário:', error);
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
createUser,
getUserInfo,
 editUserInfo,
  deleteUser,
};
