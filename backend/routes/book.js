import express from "express";
import controller from "../controllers/book.js";
import bookMdd from "../middleware/bookValidation.js";

const router = express.Router();

router.post("/registerBook", bookMdd.validations, controller.registerBook);
router.get("/listBook/:name?", controller.listBook);

export default router;