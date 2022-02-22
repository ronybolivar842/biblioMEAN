import express from "express";
import controller from "../controllers/book.js";
import bookMdd from "../middleware/bookValidation.js";

const router = express.Router();

router.post("/registerBook", bookMdd.validations, controller.registerBook);
router.get("/listBook/:name?", controller.listBook);
router.get("/listBookLibrarian/:name?", controller.listBookLibrarian);
router.put("/updateBook", bookMdd.validations, controller.updateBook);
router.put("/deleteBook/:_id", controller.deleteBook);

export default router;