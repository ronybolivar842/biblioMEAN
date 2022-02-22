import express from "express";
import controller from "../controllers/user.js";

import userMdd from "../middleware/userValidations.js";
import roleMdd from "../middleware/roleValidations.js";

const router = express.Router();

router.post(
  "/registerUser",
  userMdd.validations,
  roleMdd.validRole,
  controller.registerUser
);
router.get("/listUser/:name?", controller.listUser);
router.get("/listUserAdmin/:name?", controller.listUserAdmin);
router.put("/updateUser", userMdd.validData, controller.updateUser);
router.put("/deleteUser/:_id", controller.deleteUser);

export default router;