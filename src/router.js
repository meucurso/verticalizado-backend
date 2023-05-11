const express = require("express");
const editalModel = require("./models/editalsModel");

const router = express.Router();

router.get("/editals", editalModel.getAllInfo);
router.get("/questions", (req, res) => {
    res.send("Questões");
});

router.get("/users", (req, res) => {
    res.send("Usuários");
});





module.exports = router;