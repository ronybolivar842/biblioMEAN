import book from "../models/book.js";

const registerBook = async (req, res) => {
  let {
    title,
    description,
    pages,
    author,
    frontPageUrl,
    publicationDate,
    category,
  } = req.body;

  const schema = new book({
    title,
    description,
    pages,
    author,
    frontPageUrl,
    publicationDate,
    category,
  });

  let result = await schema.save();

  if (!result)
    return res.status(500).send({ message: "Failed to register book" });

  return res.status(200).send({ result });
};

const listBook = async (req, res) => {
  let books = await book.find({ name: new RegExp(req.params["name"]) });
  return books.length === 0
    ? res.status(404).send({ message: "No result search" })
    : res.status(200).send({ books });
};

export default { registerBook, listBook };