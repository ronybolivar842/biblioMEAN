import express from "express";
import controller from "../controllers/role.js";
import roleMdd from "../middleware/roleValidations.js";

const router = express.Router();

router.post("/registerRole", roleMdd.validations, controller.registerRole);
router.get("/listRole/:name?", controller.listRole);

export default router;
