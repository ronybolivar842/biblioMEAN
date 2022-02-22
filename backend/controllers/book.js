import book from "../models/book.js";

const registerBook = async (req, res) => {
  const schema = new book({
    title: req.body.title,
    description: req.body.description,
    pager: req.body.pages,
    author: req.body.author,
    frontPageUrl: req.body.frontPageUrl,
    publicationDate: req.body.publicationDate,
    category: req.body.category,
  });

  let result = await schema.save();

  return !result
    ? res.status(500).send({ message: "Failed to register book" })
    : res.status(200).send({ result });
};

const listBook = async (req, res) => {
  let books = await book.find({
    $and: [{ name: new RegExp(req.params["name"]) }, { dbStatus: true }],
  });

  return books.length === 0
    ? res.status(404).send({ message: "No result search" })
    : res.status(200).send({ books });
};

const listBookLibrarian = async (req, res) => {
  let books = await book.find({ name: new RegExp(req.params["name"]) });

  return books.length === 0
    ? res.status(404).send({ message: "No result search" })
    : res.status(200).send({ books });
};

const updateBook = async (req, res) => {
  if (!req.body._id)
    return res.status(400).send({ message: "Incomplete Data" });

  const updated = await book.findByIdAndUpdate(req.body._id, {
    title: req.body.title,
    description: req.body.description,
    pages: req.body.pages,
    author: req.body.author,
    frontPageUrl: req.body.frontPageUrl,
    publicationDate: req.body.publicationDate,
    category: req.body.category,
    user: req.body.user,
    registerDate: req.body.registerDate,
  });

  return !updated
    ? res.status(500).send({ message: "Error editing book" })
    : res.status(200).send({ message: "Book updated" });
};

const deleteBook = async (req, res) => {
  if (!req.params["_id"])
    return res.status(400).send({ message: "Incomplete data" });

  const deleted = await book.findByIdAndUpdate(req.params["_id"], {
    dbStatus: false,
  });

  return !deleted
    ? res.status(500).send({ message: "Error deleting book" })
    : res.status(200).send({ message: "Book deleted" });
};

export default {
  registerBook,
  listBook,
  updateBook,
  deleteBook,
  listBookLibrarian,
};