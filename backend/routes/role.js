import express from "express";
import controller from "../controllers/role.js";
import roleMdd from "../middleware/roleValidations.js";

const router = express.Router();

router.post(
  "/registerRole",
  roleMdd.validateData,
  roleMdd.existingRole,
  controller.registerRole
);
router.get("/listRole/:name?", controller.listRole);
router.put(
  "/updateRole",
  roleMdd.validateData,
  roleMdd.existingRole,
  controller.updateRole
);
router.put("/deleteRole/:_id", controller.deleteRole);

export default router;
