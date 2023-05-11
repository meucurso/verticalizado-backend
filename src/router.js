const express = require("express");
const { getAllInfo } = require("./models/editalsModel");

const router = express.Router();

router.get("/editals", (req, res) => {
getAllInfo();
    res.send("Editais");
});
router.get("/questions", (req, res) => {
    res.send("Questões");
});

router.get("/users", (req, res) => {
    res.send("Usuários");
});





module.exports = router;