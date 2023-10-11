const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
const app = express();
const cors = require('cors');
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://adm-verticalizado.vercel.app/company/users');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(router);

module.exports = app;
