const express = require("express");

const router = express.Router();

router.get("/editals", (req, res) => {
    res.send("Editais");
});



module.exports = router;