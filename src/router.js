const express = require("express");
const editalController = require("./controllers/editalController");
const userController = require("./controllers/userController");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Home");
});
router.get("/editals", (req, res) => {
  editalController.getAll().then((result) => {
    res.status(200).json(result);
  });
});

router.get("/questions", (req, res) => {
  res.send("Questões");
});

router.get("/users/getAll", userController.getAll);

module.exports = router;
