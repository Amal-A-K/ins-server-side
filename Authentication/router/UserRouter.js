const express = require('express');
const router = express.Router();
const UserController = require("../controller/UserController");


router.post("/signup", UserController.signup);

router.post("/signin", UserController.signin);
router.post("/auth", UserController.verifyToken)
router.get("/getuser/:id", UserController.getUser)
router.put("/updateuser/:id", UserController.updateUser)
router.delete("/deleteuser/:id", UserController.deleteUser)
module.exports = router;