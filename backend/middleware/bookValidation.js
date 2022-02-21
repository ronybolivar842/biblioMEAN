import model from "../models/book.js";

const validations = async (req, res, next) => {
  validateData(req, res);
  existingBook(req, res, next);
};

const validateData = (req, res, next) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.pages ||
    !req.body.author ||
    !req.body.frontPageUrl ||
    !req.body.publicationDate ||
    !req.body.category
  )
    return res.status(401).send({ message: "Incomplete data" });

  if (next) next();
};

const existingBook = async (req, res, next) => {
  const { title, author } = req.body;
  let book = await model.findOne({ title, author });
  if (book) return res.status(400).send({ message: "Book already exists" });

  if (next) next();
};

export default { validations, existingBook };