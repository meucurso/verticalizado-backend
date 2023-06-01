const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const SECRET = process.env.JWT_SECRET;

const recovery = async (req, res) => {
  try {
    const { email } = req.body;
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ec47812b4eb255",
        pass: "0084b150a13312"
      },
    });
    const newPassword = Math.random().toString(36).slice(-8);
    const mailOptions = {
      from: 'rodrigoteste987@gmail.com',
      to: email,
      subject: 'Recuperação de senha',
      text: `Sua nova senha é: ${newPassword}`,
    };

    const hash = bcrypt.hashSync(newPassword, 10);
    await userModel.updatePassword(email, hash);
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('E-mail enviado com sucesso:', info.response);
      }
    });
    res.status(200).json({ message: 'Um e-mail de recuperação de senha foi enviado para o endereço fornecido.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao solicitar a recuperação de senha.' });
  }
};

const auth = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.getUserInfo(email);

    if (!user || user.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (user[0].active === 0) {
      return res.status(401).json({ message: "User is inactive" });
    }

    const isValidPassword = await bcrypt.compare(password, user[0].password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email: user[0].email }, SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.error('Erro ao autenticar o usuário:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
 

const create = async (req, res) => {
try{
  const {
    state_id,
    city_id,
    name,
    email,
    cpf,
    sex,
    password,
    birth_date,
  } = req.body;
 
const hashedPassword = bcrypt.hashSync(password, 10);

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
    birth_date,
  });

return res.status(200).json(user);
} catch (error) {
  if (error.code === "ER_DUP_ENTRY") {
    return res.status(409).json({ message: "Email already registered" });
  }
  if (error.code === "ER_NO_REFERENCED_ROW_2") {
    return res.status(400).json({ message: "Invalid state or city" });
  }
  console.error("Erro ao criar o usuário:", error);
  return res.status(500).json({ message: "Internal server error" });
}
};
const getUserInfo = async (req, res) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }

    const token = authorizationHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const email = decodedToken.email;

    const user = await userModel.getUserInfo(email);

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    console.error(error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};
const editUserController = async (req, res) => {
 try{
  const { email, name, state_id, city_id } = req.body;
  const user = await userModel.editUserInfo(email, name, state_id, city_id);
  return res.status(200).json(user);
 } catch{
  if (error.code === "ER_NO_REFERENCED_ROW_2") {
    return res.status(400).json({ message: "Invalid state or city" });
  }
  console.error("Erro ao editar o usuário:", error);
  return res.status(500).json({ message: "Internal server error" });
 }
};

const deleteUserController = async (req, res) => {
try{
  const { email } = req.body;
  const user = await userModel.deleteUser(email);
  return res.status(200).json(user);
} catch (error) {
  console.error("Erro ao deletar o usuário:", error);
  return res.status(500).json({ message: "Internal server error" });
}
};


module.exports = {
  getUserInfo,
  editUserController,
  deleteUserController,
  create,
  auth,
  recovery,
};
