const express = require("express");
const app = require("./app");
const userController = require("./controllers/userController");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/users/create", userController.create);
router.get("/users/getUserInfo", userController.getUserInfo);
router.put("/users/edit", userController.editUserController);
router.put("/users/delete", userController.deleteUserController);

module.exports = router;
