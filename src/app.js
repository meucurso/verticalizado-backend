const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const router = require("./router");

const app = express();

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(router);

module.exports = app;
