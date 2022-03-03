import model from "../models/book.js";

const validateData = (req, res) => {
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

  next();
};

const existingBook = async (req, res, next) => {
  const { title, author } = req.body;

  let book = await model.findOne({ title, author });

  if (book && req.body._id != book._id)
    return res.status(400).send({ message: "Book already exists" });

  next();
};

export default { existingBook, validateData };