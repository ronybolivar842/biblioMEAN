import express from "express";
import controller from "../controllers/book.js";
import bookMdd from "../middleware/bookValidation.js";
import validateId from "../middleware/idValidation.js";

const router = express.Router();

router.post(
  "/registerBook",
  bookMdd.validateData,
  bookMdd.existingBook,
  controller.registerBook
);
router.get("/listBook/:name?", controller.listBook);
router.get("/listBookLibrarian/:name?", controller.listBookLibrarian);
router.put(
  "/updateBook",
  bookMdd.validateData,
  validateId,
  bookMdd.existingBook,
  controller.updateBook
);
router.put("/deleteBook/:_id", validateId, controller.deleteBook);

export default router;