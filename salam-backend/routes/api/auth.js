const router = require("express").Router();
const {newUserController, verifyUserController, loginController} = require('../../controllers/userController')

router.post("/", newUserController);

router.get("/activate/:token", verifyUserController);

router.post("/login", loginController);

module.exports = router;
