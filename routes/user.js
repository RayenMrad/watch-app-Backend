const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.post("/user", userController.addUser);
router.get("/user/:id", userController.getUserById);
router.put("/user/:id", userController.updateUser);
router.put("/user/password/:id", userController.updatePassword);
router.put("/user/image/:id", userController.updateUserImage);

module.exports = router;
