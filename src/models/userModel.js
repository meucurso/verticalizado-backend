const connection = require("./connection");
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
    const [user] = await connection.execute("INSERT INTO student ( state_id, city_id, name, email, sex, active, update_at, created_at, password, birth_date) VALUES ( ?, ?, ?,  ?, ?, ?, ?, ?, ?, ?)", [
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

const authUser = async (email, password) => {
  try {
    const [user] = await connection.execute(
      "SELECT * FROM student WHERE email = ? AND password = ?",
      [
        email || null, 
        password || null,
      ]
    );
    return user;
  } catch (error) {
    console.error('Erro ao autenticar o usuário:', error);
    throw error;
  }
};
const updatePassword = async (email, password) => {
  try{
    const [user] = await connection.execute("UPDATE student SET password = ? WHERE email = ?", [
      password,
      email,
    ]);
    return user;
  } catch (error) {
    console.error('Erro ao atualizar a senha do usuário:', error);
    throw error;
  }
};


const recoverPassword = async (email) => {
  try{
    const [user] = await connection.execute("SELECT * FROM student WHERE email = ?", [
      email,
    ]);
    return user;
  } catch (error) {
    console.error('Erro ao recuperar a senha do usuário:', error);
    throw error;
  }
};
const getAllUsers = async () => {
  try{
    const [user] = await connection.execute("SELECT * FROM student");
    return user;
  } catch (error) {
    console.error('Erro ao recuperar a senha do usuário:', error);
    throw error;
  }
  }


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
