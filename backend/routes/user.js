import express from "express";
import controller from "../controllers/user.js";

import userMdd from "../middleware/userValidations.js";
import roleMdd from "../middleware/roleValidations.js";

const router = express.Router();

router.post(
  "/register",
  userMdd.validData,
  userMdd.existingEmail,
  roleMdd.validRole,
  controller.registerUser
);
router.get("/list/:name?", controller.listUser);
router.get("/listUsers/:name?", controller.listUserAdmin);
router.put("/update", userMdd.validData, controller.updateUser);
router.put("/delete/:_id", controller.deleteUser);

export default router;