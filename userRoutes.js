const express =request(express);
const router =express.Router();
const userController=require("../controlllers/userController");
router.get("/user.userController.get.user")
router.post("/user.userController.add.user")
router
.router("/user")
.get(userController.getUser)
.post(userController.add.User)
 