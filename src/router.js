const express = require("express");
const app = require("./app");
const userController = require("./controllers/userController");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.get("/users/getAll", userController.getAll);
router.get("/users/getUserInfoById", userController.getUserInfoById);
router.post("/users/create", userController.create);
router.put("/users/edit", userController.editUserController);
router.delete("/users/delete", userController.deleteUserController);

module.exports = router;
