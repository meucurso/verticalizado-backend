const express = require("express");
const app = require("./app");
const userController = require("./controllers/userController");
const locationController = require("./controllers/locationController");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.post("/users/create", userController.create);
router.post("/users/recovery", userController.recovery);
router.post("/users/auth", userController.auth);
router.get("/users/getUserInfo", userController.getUserInfo);
router.put("/users/edit", userController.editUserController);
router.put("/users/delete", userController.deleteUserController);
router.put("/users/editPassword", userController.editPassword);
router.get("/location/citys", locationController.getCitys);
router.get("/location/states", locationController.getStates);
router.get("/location/citys/:id", locationController.getCityNameById);
router.get("/location/states/:id", locationController.getStateNameById);


module.exports = router;
